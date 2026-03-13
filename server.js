const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error("Missing DATABASE_URL in environment.");
  process.exit(1);
}

const rawOrigins = process.env.ALLOWED_ORIGINS || "*";
const allowedOrigins = rawOrigins.split(",").map((origin) => origin.trim());
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes("*") || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }
    callback(new Error("Not allowed by CORS"));
  }
};

app.use(cors(corsOptions));
app.use(express.json());

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

const initSql = `
  CREATE TABLE IF NOT EXISTS exams (
    id SERIAL PRIMARY KEY,
    user_id TEXT NOT NULL,
    exam_title TEXT NOT NULL,
    score TEXT NOT NULL,
    percent INT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  );

  CREATE TABLE IF NOT EXISTS exam_answers (
    id SERIAL PRIMARY KEY,
    exam_id INT NOT NULL REFERENCES exams(id) ON DELETE CASCADE,
    question_index INT NOT NULL,
    question_text TEXT NOT NULL,
    user_answer TEXT,
    correct_answer TEXT NOT NULL,
    is_correct BOOLEAN NOT NULL,
    hint_used BOOLEAN NOT NULL DEFAULT FALSE
  );
`;

pool.query(initSql).catch((error) => {
  console.error("Failed to initialize database:", error);
  process.exit(1);
});

app.post("/api/exams", async (req, res) => {
  const { userId, title, score, percent, answers } = req.body || {};
  if (!userId || !title || !score || typeof percent !== "number") {
    res.status(400).json({ error: "Missing required fields." });
    return;
  }
  try {
    const insertExam = await pool.query(
      "INSERT INTO exams (user_id, exam_title, score, percent) VALUES ($1, $2, $3, $4) RETURNING id",
      [userId, title, score, percent]
    );
    const examId = insertExam.rows[0].id;
    if (Array.isArray(answers) && answers.length > 0) {
      const values = [];
      const params = [];
      let paramIndex = 1;
      answers.forEach((answer) => {
        values.push(`($${paramIndex++}, $${paramIndex++}, $${paramIndex++}, $${paramIndex++}, $${paramIndex++}, $${paramIndex++}, $${paramIndex++})`);
        params.push(
          examId,
          answer.index,
          answer.question,
          answer.userAnswer,
          answer.correctAnswer,
          answer.isCorrect,
          answer.hintUsed
        );
      });
      await pool.query(
        `INSERT INTO exam_answers (exam_id, question_index, question_text, user_answer, correct_answer, is_correct, hint_used) VALUES ${values.join(",")}`,
        params
      );
    }
    res.json({ ok: true, examId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save exam." });
  }
});

app.get("/api/exams", async (req, res) => {
  const userId = req.query.userId;
  if (!userId) {
    res.status(400).json({ error: "Missing userId." });
    return;
  }
  try {
    const result = await pool.query(
      "SELECT id, exam_title, score, percent, created_at FROM exams WHERE user_id = $1 ORDER BY created_at DESC LIMIT 50",
      [userId]
    );
    const payload = result.rows.map((row) => ({
      id: row.id,
      title: row.exam_title,
      score: row.score,
      percent: row.percent,
      date: new Date(row.created_at).toLocaleString()
    }));
    res.json(payload);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to load history." });
  }
});

app.get("/api/exams/:id/answers", async (req, res) => {
  const userId = req.query.userId;
  const examId = Number(req.params.id);
  if (!userId || Number.isNaN(examId)) {
    res.status(400).json({ error: "Missing userId or invalid examId." });
    return;
  }
  try {
    const result = await pool.query(
      `SELECT a.question_index, a.question_text, a.user_answer, a.correct_answer, a.is_correct, a.hint_used
       FROM exam_answers a
       JOIN exams e ON a.exam_id = e.id
       WHERE a.exam_id = $1 AND e.user_id = $2
       ORDER BY a.question_index ASC`,
      [examId, userId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to load exam details." });
  }
});

app.delete("/api/exams", async (req, res) => {
  const userId = req.query.userId;
  if (!userId) {
    res.status(400).json({ error: "Missing userId." });
    return;
  }
  try {
    await pool.query("DELETE FROM exams WHERE user_id = $1", [userId]);
    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to clear history." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
