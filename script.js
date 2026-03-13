const unit1Questions = [
  {
    text: "Simplify: 3x + 2x",
    choices: ["5x", "6x", "x^2", "5"],
    answer: 0,
    unit: "Unit 1"
  },
  {
    text: "Solve: 2x + 5 = 17",
    choices: ["x = 6", "x = 5", "x = 7", "x = 11"],
    answer: 0,
    unit: "Unit 1"
  },
  {
    text: "Simplify: 4(a + 3)",
    choices: ["4a + 12", "4a + 3", "a + 12", "7a"],
    answer: 0,
    unit: "Unit 1"
  },
  {
    text: "Which is a coefficient in 7x - 4?",
    choices: ["7", "x", "-4", "11"],
    answer: 0,
    unit: "Unit 1"
  },
  {
    text: "Solve: 5x - 10 = 0",
    choices: ["x = 2", "x = -2", "x = 10", "x = 5"],
    answer: 0,
    unit: "Unit 1"
  },
  {
    text: "Simplify: 2(3x - 1) - x",
    choices: ["5x - 2", "6x - 1", "5x + 2", "3x - 2"],
    answer: 0,
    unit: "Unit 1"
  },
  {
    text: "Evaluate: x^2 when x = 4",
    choices: ["8", "12", "16", "24"],
    answer: 2,
    unit: "Unit 1"
  },
  {
    text: "Solve: x/3 = 9",
    choices: ["x = 3", "x = 12", "x = 27", "x = 30"],
    answer: 2,
    unit: "Unit 1"
  },
  {
    text: "Simplify: (x + 2)(x + 3)",
    choices: ["x^2 + 5x + 6", "x^2 + 6x + 5", "x^2 + 5x", "x^2 + 6"],
    answer: 0,
    unit: "Unit 1"
  },
  {
    text: "Solve: 3x - 4 = 11",
    choices: ["x = 5", "x = 7", "x = 3", "x = 1"],
    answer: 0,
    unit: "Unit 1"
  }
];

const unit2Questions = [
  {
    text: "Which ordered pair is a solution to y = 2x + 1?",
    choices: ["(1, 2)", "(2, 5)", "(0, 0)", "(3, 5)"],
    answer: 1,
    unit: "Unit 2"
  },
  {
    text: "What is the slope of the line y = 3x - 2?",
    choices: ["-2", "3", "2", "-3"],
    answer: 1,
    unit: "Unit 2"
  },
  {
    text: "If f(x) = x^2, what is f(3)?",
    choices: ["6", "9", "12", "15"],
    answer: 1,
    unit: "Unit 2"
  },
  {
    text: "Solve: 2x + 1 < 9",
    choices: ["x < 4", "x > 4", "x < 5", "x > 5"],
    answer: 0,
    unit: "Unit 2"
  },
  {
    text: "Which graph best represents y = -x?",
    choices: ["Line through origin, slope 1", "Line through origin, slope -1", "Horizontal line y = -1", "Vertical line x = -1"],
    answer: 1,
    unit: "Unit 2"
  },
  {
    text: "Which is an input for a function?",
    choices: ["Domain", "Range", "Output", "Slope"],
    answer: 0,
    unit: "Unit 2"
  },
  {
    text: "Find y when x = 2 for y = 4x - 3",
    choices: ["5", "8", "1", "-1"],
    answer: 0,
    unit: "Unit 2"
  },
  {
    text: "Which inequality matches a shaded number line to the left of 2 with an open circle at 2?",
    choices: ["x \u2264 2", "x > 2", "x < 2", "x \u2265 2"],
    answer: 2,
    unit: "Unit 2"
  },
  {
    text: "If a line passes through (0, 4) and (2, 8), what is the slope?",
    choices: ["2", "4", "-2", "6"],
    answer: 0,
    unit: "Unit 2"
  },
  {
    text: "Which equation is in slope-intercept form?",
    choices: ["2x + y = 5", "y = mx + b", "x = 3", "y - 2 = 4(x - 1)"],
    answer: 1,
    unit: "Unit 2"
  }
];

const setupSection = document.getElementById("setup");
const examSection = document.getElementById("exam");
const resultsSection = document.getElementById("results");
const startBtn = document.getElementById("startBtn");
const submitBtn = document.getElementById("submitBtn");
const restartBtn = document.getElementById("restartBtn");
const retakeBtn = document.getElementById("retakeBtn");
const questionList = document.getElementById("questionList");
const progress = document.getElementById("progress");
const examTitle = document.getElementById("examTitle");
const scoreEl = document.getElementById("score");
const breakdown = document.getElementById("breakdown");
const timerEl = document.getElementById("timer");

let currentExam = [];
let timerId = null;
let remainingSeconds = 0;
const EXAM_DURATION_MINUTES = 15;

function shuffle(array) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((entry) => entry.item);
}

function getSelectedExam() {
  const selected = document.querySelector("input[name='exam']:checked").value;
  if (selected === "unit1") {
    return {
      title: "Unit 1 Exam",
      questions: [...unit1Questions]
    };
  }
  if (selected === "unit2") {
    return {
      title: "Unit 2 Exam",
      questions: [...unit2Questions]
    };
  }
  return {
    title: "Overall Algebra 1 Exam",
    questions: [...unit1Questions, ...unit2Questions]
  };
}

function buildExam() {
  const exam = getSelectedExam();
  examTitle.textContent = exam.title;
  currentExam = shuffle(exam.questions).slice(0, 10);
  questionList.innerHTML = "";

  currentExam.forEach((question, index) => {
    const card = document.createElement("div");
    card.className = "question";

    const heading = document.createElement("h3");
    heading.textContent = `${index + 1}. ${question.text}`;
    card.appendChild(heading);

    const choices = document.createElement("div");
    choices.className = "choices";

    question.choices.forEach((choice, choiceIndex) => {
      const label = document.createElement("label");
      label.className = "choice";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q${index}`;
      input.value = choiceIndex;

      const span = document.createElement("span");
      span.textContent = choice;

      label.appendChild(input);
      label.appendChild(span);
      choices.appendChild(label);
    });

    card.appendChild(choices);
    questionList.appendChild(card);
  });

  progress.textContent = "Question 1 of 10";
  setupSection.classList.add("hidden");
  resultsSection.classList.add("hidden");
  examSection.classList.remove("hidden");
  startTimer();

  window.scrollTo({ top: examSection.offsetTop - 20, behavior: "smooth" });
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function startTimer() {
  if (timerId) {
    clearInterval(timerId);
  }
  remainingSeconds = EXAM_DURATION_MINUTES * 60;
  timerEl.textContent = `Time left: ${formatTime(remainingSeconds)}`;

  timerId = setInterval(() => {
    remainingSeconds -= 1;
    timerEl.textContent = `Time left: ${formatTime(remainingSeconds)}`;
    if (remainingSeconds <= 0) {
      clearInterval(timerId);
      timerId = null;
      gradeExam(true);
    }
  }, 1000);
}

function gradeExam() {
  let correct = 0;
  const missed = [];

  currentExam.forEach((question, index) => {
    const selected = document.querySelector(`input[name='q${index}']:checked`);
    const userAnswer = selected ? Number(selected.value) : null;

    if (userAnswer === question.answer) {
      correct += 1;
    } else {
      missed.push({
        index: index + 1,
        question: question.text,
        correct: question.choices[question.answer],
        selected: userAnswer === null ? "No answer" : question.choices[userAnswer]
      });
    }
  });

  const scorePercent = Math.round((correct / 10) * 100);
  scoreEl.textContent = `${correct} / 10 correct (${scorePercent}%)`;

  breakdown.innerHTML = "";
  if (missed.length === 0) {
    const perfect = document.createElement("div");
    perfect.className = "breakdown-item";
    perfect.textContent = "Great work! You answered every question correctly.";
    breakdown.appendChild(perfect);
  } else {
    missed.forEach((item) => {
      const block = document.createElement("div");
      block.className = "breakdown-item";

      const title = document.createElement("strong");
      title.textContent = `Question ${item.index}: ${item.question}`;

      const yourAnswer = document.createElement("div");
      yourAnswer.textContent = `Your answer: ${item.selected}`;

      const correctAnswer = document.createElement("div");
      correctAnswer.textContent = `Correct answer: ${item.correct}`;

      block.appendChild(title);
      block.appendChild(yourAnswer);
      block.appendChild(correctAnswer);
      breakdown.appendChild(block);
    });
  }

  examSection.classList.add("hidden");
  resultsSection.classList.remove("hidden");
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
  window.scrollTo({ top: resultsSection.offsetTop - 20, behavior: "smooth" });
}

function resetToSetup() {
  setupSection.classList.remove("hidden");
  examSection.classList.add("hidden");
  resultsSection.classList.add("hidden");
  questionList.innerHTML = "";
  breakdown.innerHTML = "";
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
  timerEl.textContent = `Time left: ${formatTime(EXAM_DURATION_MINUTES * 60)}`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

startBtn.addEventListener("click", buildExam);
submitBtn.addEventListener("click", gradeExam);
restartBtn.addEventListener("click", resetToSetup);
retakeBtn.addEventListener("click", resetToSetup);

questionList.addEventListener("change", () => {
  const answered = Array.from(new Set(
    Array.from(document.querySelectorAll("input[type='radio']:checked")).map(
      (input) => input.name
    )
  )).length;
  progress.textContent = `Question ${Math.min(answered + 1, 10)} of 10`;
});
