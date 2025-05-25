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
  {
    question: "How many sides does a hexagon have?",
    options: ["5", "6", "7", "8"],
    answer: 1
  },
  {
    question: "Find the odd one out: Apple, Banana, Carrot, Mango",
    options: ["Apple", "Carrot", "Banana", "Mango"],
    answer: 1
  },
  {
    question: "What is 144 divided by 12?",
    options: ["10", "11", "12", "13"],
    answer: 2
  },
  {
    question: "Which word is a palindrome?",
    options: ["Level", "World", "Brain", "Test"],
    answer: 0
  },
  {
    question: "What comes next? 1, 4, 9, 16, ?",
    options: ["20", "25", "30", "36"],
    answer: 1
  },
  {
    question: "Which number is missing? 3, 6, ?, 12, 15",
    options: ["7", "8", "9", "10"],
    answer: 2
  },
  {
    question: "Choose the correct analogy: Foot is to Shoe as Hand is to...",
    options: ["Sock", "Glove", "Hat", "Watch"],
    answer: 1
  },
  {
    question: "How many letters are in the English alphabet?",
    options: ["24", "25", "26", "27"],
    answer: 2
  },
  {
    question: "What’s the capital of France?",
    options: ["Paris", "Rome", "Berlin", "Madrid"],
    answer: 0
  },
  {
    question: "What is the next prime number after 7?",
    options: ["9", "10", "11", "12"],
    answer: 2
  },
  {
    question: "Which is the smallest planet in our solar system?",
    options: ["Venus", "Mars", "Mercury", "Pluto"],
    answer: 2
  },
  {
    question: "Which number does not belong? 1, 2, 4, 8, 10, 16",
    options: ["1", "2", "10", "16"],
    answer: 2
  },
  {
    question: "How many minutes are in 3.5 hours?",
    options: ["180", "200", "210", "220"],
    answer: 2
  },
  {
    question: "If all Bloops are Razzies and all Razzies are Lazzies, are all Bloops definitely Lazzies?",
    options: ["Yes", "No", "Only some", "Cannot tell"],
    answer: 0
  },
  {
    question: "Which word means the opposite of 'benevolent'?",
    options: ["Kind", "Cruel", "Loyal", "Gentle"],
    answer: 1
  },
  {
    question: "Which day comes after Tuesday?",
    options: ["Monday", "Wednesday", "Thursday", "Friday"],
    answer: 1
  },
  {
    question: "What is 7 x 8?",
    options: ["54", "56", "58", "60"],
    answer: 1
  }
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
