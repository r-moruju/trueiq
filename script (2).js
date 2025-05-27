
const allQuestions = [
  {
    question: "What comes next? 2, 4, 8, 16, ?",
    options: ["20", "24", "32", "36"],
    answer: 2,
    category: "Pattern",
    difficulty: "medium"
  },
  {
    question: "Which shape doesn't belong?",
    options: ["Square", "Triangle", "Circle", "Rectangle"],
    answer: 2,
    category: "Logic",
    difficulty: "medium"
  },
  {
    question: "Which word is spelled correctly?",
    options: ["Definately", "Definitely", "Definetly", "Defenetly"],
    answer: 1,
    category: "Verbal",
    difficulty: "easy"
  },
  {
    question: "Which shape shows 3 sides?",
    options: ["Triangle", "Square", "Circle", "Ellipse"],
    answer: 0,
    category: "Visual",
    difficulty: "hard"
  }
];

const questions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 4);

let currentQuestion = 0;
let score = 0;
let totalTimeTaken = 0;
let questionStartTime = 0;
let questionTimes = [];

let categoryScores = {
  Math: 0,
  Logic: 0,
  Verbal: 0,
  Pattern: 0,
  General: 0,
  Visual: 0
};

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("timer");
const progressEl = document.getElementById("progress");

function showQuestion() {
  questionStartTime = Date.now();
  const q = questions[currentQuestion];
  questionEl.innerHTML = `<div class="text-xl font-semibold mb-4">${q.question}</div>`;
  optionsEl.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.innerHTML = option;
    btn.className = "bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded m-2 shadow hover:scale-105 transition-all";
    btn.onclick = () => checkAnswer(index);
    optionsEl.appendChild(btn);
  });

  updateProgress();
}

function checkAnswer(selectedIndex) {
  const questionEndTime = Date.now();
  const timeSpent = Math.round((questionEndTime - questionStartTime) / 1000);
  questionTimes.push(timeSpent);
  totalTimeTaken += timeSpent;

  const current = questions[currentQuestion];
  if (selectedIndex === current.answer) {
    score++;
    categoryScores[current.category]++;
  }
  nextQuestion();
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  localStorage.setItem("iqScore", score);
  localStorage.setItem("categoryScores", JSON.stringify(categoryScores));
  localStorage.setItem("totalTimeTaken", totalTimeTaken);
  localStorage.setItem("questionTimes", JSON.stringify(questionTimes));
  localStorage.setItem("answeredQuestions", JSON.stringify(questions));
  window.location.href = "results.html";
}

function updateProgress() {
  const percent = ((currentQuestion + 1) / questions.length) * 100;
  progressEl.innerHTML = `
    <div class="w-full bg-gray-300 rounded-full h-2 mb-4">
      <div class="bg-green-500 h-2 rounded-full transition-all" style="width: ${percent}%"></div>
    </div>
    <p class="text-sm text-gray-600 text-center">${currentQuestion + 1} / ${questions.length}</p>
  `;
}

document.addEventListener("DOMContentLoaded", showQuestion);
