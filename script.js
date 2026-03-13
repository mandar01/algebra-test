const unit1Questions = [
  {
    text: "Simplify: 3x + 2x",
    choices: ["5x", "6x", "x^2", "5"],
    answer: 0,
    explanation:
      "Combine like terms.\nAdd the coefficients: 3 + 2 = 5.\nSo 3x + 2x = 5x.",
    unit: "Unit 1"
  },
  {
    text: "Solve: 2x + 5 = 17",
    choices: ["x = 6", "x = 5", "x = 7", "x = 11"],
    answer: 0,
    explanation:
      "Subtract 5 from both sides: 2x = 12.\nDivide by 2.\nSo x = 6.",
    unit: "Unit 1"
  },
  {
    text: "Simplify: 4(a + 3)",
    choices: ["4a + 12", "4a + 3", "a + 12", "7a"],
    answer: 0,
    explanation:
      "Distribute 4 to each term.\n4(a + 3) = 4a + 12.",
    unit: "Unit 1"
  },
  {
    text: "Which is a coefficient in 7x - 4?",
    choices: ["7", "x", "-4", "11"],
    answer: 0,
    explanation:
      "The coefficient is the number multiplying x.\nIn 7x - 4, the coefficient is 7.",
    unit: "Unit 1"
  },
  {
    text: "Solve: 5x - 10 = 0",
    choices: ["x = 2", "x = -2", "x = 10", "x = 5"],
    answer: 0,
    explanation:
      "Add 10 to both sides: 5x = 10.\nDivide by 5.\nSo x = 2.",
    unit: "Unit 1"
  },
  {
    text: "Simplify: 2(3x - 1) - x",
    choices: ["5x - 2", "6x - 1", "5x + 2", "3x - 2"],
    answer: 0,
    explanation:
      "Distribute 2: 2(3x - 1) = 6x - 2.\nSubtract x: 6x - 2 - x = 5x - 2.",
    unit: "Unit 1"
  },
  {
    text: "Evaluate: x^2 when x = 4",
    choices: ["8", "12", "16", "24"],
    answer: 2,
    explanation:
      "Substitute x = 4.\nCompute 4^2 = 16.",
    unit: "Unit 1"
  },
  {
    text: "Solve: x/3 = 9",
    choices: ["x = 3", "x = 12", "x = 27", "x = 30"],
    answer: 2,
    explanation:
      "Multiply both sides by 3.\nSo x = 27.",
    unit: "Unit 1"
  },
  {
    text: "Simplify: (x + 2)(x + 3)",
    choices: ["x^2 + 5x + 6", "x^2 + 6x + 5", "x^2 + 5x", "x^2 + 6"],
    answer: 0,
    explanation:
      "Use FOIL.\nFirst: x*x = x^2.\nOuter/Inner: 3x + 2x = 5x.\nLast: 2*3 = 6.\nSo x^2 + 5x + 6.",
    unit: "Unit 1"
  },
  {
    text: "Solve: 3x - 4 = 11",
    choices: ["x = 5", "x = 7", "x = 3", "x = 1"],
    answer: 0,
    explanation:
      "Add 4: 3x = 15.\nDivide by 3.\nSo x = 5.",
    unit: "Unit 1"
  }
];

const unit2Questions = [
  {
    text: "Which ordered pair is a solution to y = 2x + 1?",
    choices: ["(1, 2)", "(2, 5)", "(0, 0)", "(3, 5)"],
    answer: 1,
    explanation:
      "Test x = 2.\nCompute y = 2(2) + 1 = 5.\nSo (2, 5) works.",
    unit: "Unit 2"
  },
  {
    text: "What is the slope of the line y = 3x - 2?",
    choices: ["-2", "3", "2", "-3"],
    answer: 1,
    explanation:
      "In y = mx + b, the slope is m.\nHere m = 3.",
    unit: "Unit 2"
  },
  {
    text: "If f(x) = x^2, what is f(3)?",
    choices: ["6", "9", "12", "15"],
    answer: 1,
    explanation:
      "Substitute x = 3.\nCompute 3^2 = 9.",
    unit: "Unit 2"
  },
  {
    text: "Solve: 2x + 1 < 9",
    choices: ["x < 4", "x > 4", "x < 5", "x > 5"],
    answer: 0,
    explanation:
      "Subtract 1: 2x < 8.\nDivide by 2.\nSo x < 4.",
    unit: "Unit 2"
  },
  {
    text: "Which graph best represents y = -x?",
    choices: ["Line through origin, slope 1", "Line through origin, slope -1", "Horizontal line y = -1", "Vertical line x = -1"],
    answer: 1,
    explanation:
      "y = -x has slope -1.\nIt passes through the origin (0, 0).",
    unit: "Unit 2"
  },
  {
    text: "Which is an input for a function?",
    choices: ["Domain", "Range", "Output", "Slope"],
    answer: 0,
    explanation:
      "Inputs are the domain.\nOutputs make up the range.",
    unit: "Unit 2"
  },
  {
    text: "Find y when x = 2 for y = 4x - 3",
    choices: ["5", "8", "1", "-1"],
    answer: 0,
    explanation:
      "Plug in x = 2.\nCompute y = 4(2) - 3 = 8 - 3 = 5.",
    unit: "Unit 2"
  },
  {
    text: "Which inequality matches a shaded number line to the left of 2 with an open circle at 2?",
    choices: ["x \u2264 2", "x > 2", "x < 2", "x \u2265 2"],
    answer: 2,
    explanation:
      "Open circle means not included.\nShaded left means less than.\nSo x < 2.",
    unit: "Unit 2"
  },
  {
    text: "If a line passes through (0, 4) and (2, 8), what is the slope?",
    choices: ["2", "4", "-2", "6"],
    answer: 0,
    explanation:
      "Slope = (8 - 4) / (2 - 0).\nSo slope = 4 / 2 = 2.",
    unit: "Unit 2"
  },
  {
    text: "Which equation is in slope-intercept form?",
    choices: ["2x + y = 5", "y = mx + b", "x = 3", "y - 2 = 4(x - 1)"],
    answer: 1,
    explanation:
      "Slope-intercept form is y = mx + b.",
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
const explainModal = document.getElementById("explainModal");
const explainQuestion = document.getElementById("explainQuestion");
const explainBody = document.getElementById("explainBody");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalHeader = document.getElementById("modalHeader");
const modalCard = explainModal.querySelector(".modal-card");

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

function gradeExam(isAutoSubmit = false) {
  let correct = 0;
  const missed = [];
  const existingNotice = resultsSection.querySelector(".auto-submit");
  if (existingNotice) {
    existingNotice.remove();
  }
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }

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
        selected: userAnswer === null ? "No answer" : question.choices[userAnswer],
        explanation: question.explanation
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

      const explainBtn = document.createElement("button");
      explainBtn.type = "button";
      explainBtn.className = "explain-btn";
      explainBtn.textContent = "How to solve";
      explainBtn.addEventListener("click", () => {
        explainQuestion.textContent = item.question;
        explainBody.textContent = item.explanation;
        explainModal.classList.remove("hidden");
      });

      block.appendChild(title);
      block.appendChild(yourAnswer);
      block.appendChild(correctAnswer);
      block.appendChild(explainBtn);
      breakdown.appendChild(block);
    });
  }

  examSection.classList.add("hidden");
  resultsSection.classList.remove("hidden");
  if (isAutoSubmit && remainingSeconds <= 0) {
    const notice = document.createElement("div");
    notice.className = "auto-submit";
    notice.textContent = "Time is up! Your answers were submitted automatically.";
    resultsSection.insertBefore(notice, scoreEl);
  }
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
closeModalBtn.addEventListener("click", () => {
  explainModal.classList.add("hidden");
});
explainModal.addEventListener("click", (event) => {
  if (event.target === explainModal) {
    explainModal.classList.add("hidden");
  }
});

let isDragging = false;
let dragOffsetX = 0;
let dragOffsetY = 0;

function startDrag(event) {
  if (event.target === closeModalBtn) {
    return;
  }
  isDragging = true;
  const rect = modalCard.getBoundingClientRect();
  dragOffsetX = event.clientX - rect.left;
  dragOffsetY = event.clientY - rect.top;
  modalCard.style.position = "fixed";
  modalCard.style.left = `${rect.left}px`;
  modalCard.style.top = `${rect.top}px`;
  modalCard.style.margin = "0";
}

function drag(event) {
  if (!isDragging) {
    return;
  }
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const cardWidth = modalCard.offsetWidth;
  const cardHeight = modalCard.offsetHeight;
  const nextLeft = Math.min(Math.max(event.clientX - dragOffsetX, 12), viewportWidth - cardWidth - 12);
  const nextTop = Math.min(Math.max(event.clientY - dragOffsetY, 12), viewportHeight - cardHeight - 12);
  modalCard.style.left = `${nextLeft}px`;
  modalCard.style.top = `${nextTop}px`;
}

function endDrag() {
  isDragging = false;
}

modalHeader.addEventListener("mousedown", startDrag);
window.addEventListener("mousemove", drag);
window.addEventListener("mouseup", endDrag);

questionList.addEventListener("change", () => {
  const answered = Array.from(new Set(
    Array.from(document.querySelectorAll("input[type='radio']:checked")).map(
      (input) => input.name
    )
  )).length;
  progress.textContent = `Question ${Math.min(answered + 1, 10)} of 10`;
});
