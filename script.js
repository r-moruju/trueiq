// script.js

const questions = [
  {
    question: "What comes next? 2, 4, 8, 16, ?",
    options: ["20", "24", "32", "36"],
    answer: 2
  },
  {
    question: "Which shape doesn't belong?",
    options: ["Square", "Triangle", "Circle", "Rectangle"],
    answer: 2
  },
  {
    question: "What comes next? A, C, E, G, ?",
    options: ["H", "I", "J", "K"],
    answer: 1
  },
  // Add 12 more as needed
];

let currentQuestion = 0;
let score = 0;
let timer = 30;
let interval;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("timer");

function showQuestion() {
  clearInterval(interval);
  timer = 30;
  timerEl.textContent = timer;

  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.className = "bg-blue-500 text-white px-4 py-2 rounded m-2 hover:bg-blue-600";
    btn.onclick = () => checkAnswer(index);
    optionsEl.appendChild(btn);
  });

  interval = setInterval(() => {
    timer--;
    timerEl.textContent = timer;
    if (timer === 0) {
      nextQuestion();
    }
  }, 1000);
}

function checkAnswer(selectedIndex) {
  if (selectedIndex === questions[currentQuestion].answer) {
    score++;
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
  window.location.href = "results.html";
}

document.addEventListener("DOMContentLoaded", showQuestion);
