
const allQuestions = JSON.parse(localStorage.getItem("quizBank") || "[]");
const questions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 15);

let currentQuestion = 0;
let score = 0;
let timer = 30;
let interval;
let totalTimeTaken = 0;

let categoryScores = {
  Math: 0,
  Logic: 0,
  Verbal: 0,
  Pattern: 0,
  Visual: 0,
  General: 0
};

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("timer");
const progressEl = document.getElementById("progress");

function showQuestion() {
  clearInterval(interval);
  timer = 30;
  timerEl.textContent = `⏱️ ${timer}s`;
  updateProgress();

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

  interval = setInterval(() => {
    timer--;
    totalTimeTaken++;
    timerEl.textContent = `⏱️ ${timer}s`;
    if (timer === 0) nextQuestion();
  }, 1000);
}

function checkAnswer(selectedIndex) {
  const current = questions[currentQuestion];
  if (selectedIndex === current.answer) {
    score++;
    categoryScores[current.category]++;
  }
  nextQuestion();
}

function nextQuestion() {
  clearInterval(interval);
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
  window.location.href = "results.html";
}

function updateProgress() {
  const percent = ((currentQuestion + 1) / questions.length) * 100;
  progressEl.innerHTML = `
    <div class="w-full bg-gray-300 rounded-full h-2 mb-4">
      <div class="bg-green-500 h-2 rounded-full transition-all" style="width: ${percent}%;"></div>
    </div>
    <p class="text-sm text-gray-600 text-center">${currentQuestion + 1} / ${questions.length}</p>
  `;
}

document.addEventListener("DOMContentLoaded", showQuestion);
