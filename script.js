
const allQuestions = [
  {
    "question": "What is 7 squared?",
    "options": ["47", "49", "51", "53"],
    "answer": 1,
    "category": "Math"
  },
  {
    "question": "What number completes: 1, 3, 6, 10, ?",
    "options": ["12", "14", "15", "16"],
    "answer": 2,
    "category": "Pattern"
  },
  {
    "question": "What is 15 + 28?",
    "options": ["41", "42", "43", "44"],
    "answer": 2,
    "category": "Math"
  },
  {
    "question": "Which is not a primary color?",
    "options": ["Red", "Blue", "Green", "Yellow"],
    "answer": 2,
    "category": "General"
  },
  {
    "question": "Which number is even?",
    "options": ["13", "17", "22", "25"],
    "answer": 2,
    "category": "Math"
  },
  {
    "question": "Which is the synonym of 'fast'?",
    "options": ["Slow", "Quick", "Lazy", "Small"],
    "answer": 1,
    "category": "Verbal"
  },
  {
    "question": "What is half of 64?",
    "options": ["30", "31", "32", "33"],
    "answer": 2,
    "category": "Math"
  },
  {
    "question": "Which comes first alphabetically?",
    "options": ["Zebra", "Yak", "Ant", "Bee"],
    "answer": 2,
    "category": "Verbal"
  },
  {
    "question": "How many legs does a spider have?",
    "options": ["6", "7", "8", "9"],
    "answer": 2,
    "category": "General"
  },
  {
    "question": "What is the next prime after 11?",
    "options": ["12", "13", "14", "15"],
    "answer": 1,
    "category": "Math"
  },
  {
    "question": "Which number is a multiple of 9?",
    "options": ["27", "28", "29", "30"],
    "answer": 0,
    "category": "Math"
  },
  {
    "question": "What comes next? 2, 4, 8, 16, ?",
    "options": [
      "20",
      "24",
      "32",
      "36"
    ],
    "answer": 2,
    "category": "Pattern"
  },
  {
    "question": "Which shape doesn't belong?",
    "options": [
      "Square",
      "Triangle",
      "Circle",
      "Rectangle"
    ],
    "answer": 2,
    "category": "Logic"
  },
  {
    "question": "What comes next? A, C, E, G, ?",
    "options": [
      "H",
      "I",
      "J",
      "K"
    ],
    "answer": 1,
    "category": "Pattern"
  },
  {
    "question": "How many sides does a hexagon have?",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answer": 1,
    "category": "Math"
  },
  {
    "question": "Find the odd one out: Apple, Banana, Carrot, Mango",
    "options": [
      "Apple",
      "Carrot",
      "Banana",
      "Mango"
    ],
    "answer": 1,
    "category": "Logic"
  },
  {
    "question": "What is 144 divided by 12?",
    "options": [
      "10",
      "11",
      "12",
      "13"
    ],
    "answer": 2,
    "category": "Math"
  },
  {
    "question": "Which word is a palindrome?",
    "options": [
      "Level",
      "World",
      "Brain",
      "Test"
    ],
    "answer": 0,
    "category": "Verbal"
  },
  {
    "question": "What comes next? 1, 4, 9, 16, ?",
    "options": [
      "20",
      "25",
      "30",
      "36"
    ],
    "answer": 1,
    "category": "Pattern"
  },
  {
    "question": "Which number is missing? 3, 6, ?, 12, 15",
    "options": [
      "7",
      "8",
      "9",
      "10"
    ],
    "answer": 2,
    "category": "Math"
  },
  {
    "question": "Choose the correct analogy: Foot is to Shoe as Hand is to...",
    "options": [
      "Sock",
      "Glove",
      "Hat",
      "Watch"
    ],
    "answer": 1,
    "category": "Verbal"
  },
  {
    "question": "How many letters are in the English alphabet?",
    "options": [
      "24",
      "25",
      "26",
      "27"
    ],
    "answer": 2,
    "category": "Verbal"
  },
  {
    "question": "What\u2019s the capital of France?",
    "options": [
      "Paris",
      "Rome",
      "Berlin",
      "Madrid"
    ],
    "answer": 0,
    "category": "Verbal"
  },
  {
    "question": "Next prime after 7?",
    "options": [
      "9",
      "10",
      "11",
      "12"
    ],
    "answer": 2,
    "category": "Math"
  },
  {
    "question": "Smallest planet in solar system?",
    "options": [
      "Venus",
      "Mars",
      "Mercury",
      "Pluto"
    ],
    "answer": 2,
    "category": "General"
  },
  {
    "question": "Which number doesn't belong? 1, 2, 4, 8, 10, 16",
    "options": [
      "1",
      "2",
      "10",
      "16"
    ],
    "answer": 2,
    "category": "Pattern"
  },
  {
    "question": "Minutes in 3.5 hours?",
    "options": [
      "180",
      "200",
      "210",
      "220"
    ],
    "answer": 2,
    "category": "Math"
  },
  {
    "question": "All Bloops are Razzies and all Razzies are Lazzies. Are all Bloops Lazzies?",
    "options": [
      "Yes",
      "No",
      "Only some",
      "Cannot tell"
    ],
    "answer": 0,
    "category": "Logic"
  },
  {
    "question": "Opposite of 'benevolent'?",
    "options": [
      "Kind",
      "Cruel",
      "Loyal",
      "Gentle"
    ],
    "answer": 1,
    "category": "Verbal"
  },
  {
    "question": "What comes next? Z, X, V, T, ?",
    "options": [
      "S",
      "R",
      "Q",
      "P"
    ],
    "answer": 1,
    "category": "Pattern"
  },
  {
    "question": "What is 7 x 8?",
    "options": [
      "54",
      "56",
      "58",
      "60"
    ],
    "answer": 1,
    "category": "Math"
  },
  {
    "question": "What comes next? 5, 10, 20, 40, ?",
    "options": [
      "60",
      "70",
      "80",
      "100"
    ],
    "answer": 2,
    "category": "Pattern"
  },
  {
    "question": "What comes next? 3, 5, 9, 17, ?",
    "options": [
      "30",
      "33",
      "35",
      "34"
    ],
    "answer": 3,
    "category": "Math"
  },
  {
    "question": "What comes next? B, E, H, K, ?",
    "options": [
      "M",
      "N",
      "O",
      "P"
    ],
    "answer": 1,
    "category": "Pattern"
  },
  {
    "question": "Which breaks the pattern? 2, 4, 8, 14, 16",
    "options": [
      "4",
      "8",
      "14",
      "16"
    ],
    "answer": 2,
    "category": "Pattern"
  },
  {
    "question": "What comes next? 100, 90, 81, 73, ?",
    "options": [
      "65",
      "66",
      "64",
      "63"
    ],
    "answer": 0,
    "category": "Pattern"
  },
  {
    "question": "Synonym of 'intelligent'?",
    "options": [
      "Dull",
      "Smart",
      "Quiet",
      "Friendly"
    ],
    "answer": 1,
    "category": "Verbal"
  },
  {
    "question": "Which does not belong? Red, Blue, Apple, Yellow",
    "options": [
      "Red",
      "Blue",
      "Apple",
      "Yellow"
    ],
    "answer": 2,
    "category": "Logic"
  },
  {
    "question": "Which word is spelled correctly?",
    "options": [
      "Definately",
      "Definitely",
      "Definetly",
      "Defenetly"
    ],
    "answer": 1,
    "category": "Verbal"
  },
  {
    "question": "If today is Monday, what day is in 10 days?",
    "options": [
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "answer": 3,
    "category": "Logic"
  },
  {
    "question": "What is 15% of 200?",
    "options": [
      "25",
      "30",
      "35",
      "40"
    ],
    "answer": 1,
    "category": "Math"
  },
  {
    "question": "Which color comes next in the sequence: Red, Orange, Yellow, ...?",
    "options": [
      "<svg width=\"50\" height=\"50\"><rect width=\"50\" height=\"50\" fill=\"violet\" /></svg>",
      "<svg width=\"50\" height=\"50\"><rect width=\"50\" height=\"50\" fill=\"blue\" /></svg>",
      "<svg width=\"50\" height=\"50\"><rect width=\"50\" height=\"50\" fill=\"indigo\" /></svg>",
      "<svg width=\"50\" height=\"50\"><rect width=\"50\" height=\"50\" fill=\"green\" /></svg>"
    ],
    "answer": 3,
    "category": "Pattern"
  },
  {
    "question": "Triangle \u2192 Square \u2192 Pentagon \u2192 ?",
    "options": [
      "<svg viewBox=\"0 0 100 100\" width=\"50\" height=\"50\"><polygon points=\"50,10 10,90 90,90\" fill=\"steelblue\" /></svg>",
      "<svg width=\"50\" height=\"50\"><rect width=\"50\" height=\"50\" fill=\"tomato\" /></svg>",
      "<svg viewBox=\"0 0 100 100\" width=\"50\" height=\"50\"><polygon points=\"50,5 95,38 77,95 23,95 5,38\" fill=\"goldenrod\" /></svg>",
      "<svg viewBox=\"0 0 100 100\" width=\"50\" height=\"50\"><polygon points=\"50,5 90,25 90,75 50,95 10,75 10,25\" fill=\"mediumseagreen\" /></svg>"
    ],
    "answer": 3,
    "category": "Pattern"
  },
  {
    "question": "Which has the most symmetry?",
    "options": [
      "<svg width=\"50\" height=\"50\"><circle cx=\"25\" cy=\"25\" r=\"25\" fill=\"skyblue\" /></svg>",
      "<svg width=\"50\" height=\"50\"><rect width=\"50\" height=\"50\" fill=\"gray\" /></svg>",
      "<svg viewBox=\"0 0 100 100\" width=\"50\" height=\"50\"><polygon points=\"50,10 10,90 90,90\" fill=\"teal\" /></svg>",
      "<svg width=\"60\" height=\"30\"><rect width=\"60\" height=\"30\" fill=\"salmon\" /></svg>"
    ],
    "answer": 0,
    "category": "Visual"
  },
  {
    "question": "Which shape does not belong?",
    "options": [
      "<svg width=\"50\" height=\"50\"><circle cx=\"25\" cy=\"25\" r=\"25\" fill=\"blue\" /></svg>",
      "<svg width=\"50\" height=\"50\"><rect width=\"50\" height=\"50\" fill=\"red\" /></svg>",
      "<svg viewBox=\"0 0 100 100\" width=\"50\" height=\"50\"><polygon points=\"50,10 10,90 90,90\" fill=\"green\" /></svg>",
      "<svg width=\"50\" height=\"50\"><ellipse cx=\"25\" cy=\"25\" rx=\"25\" ry=\"10\" fill=\"purple\" /></svg>"
    ],
    "answer": 3,
    "category": "Logic"
  },
  {
    "question": "Complete the shape pattern: \u25b2, \u25a0, \u25cf, \u25b2, \u25a0, ?",
    "options": [
      "<svg width=\"50\" height=\"50\"><circle cx=\"25\" cy=\"25\" r=\"25\" fill=\"gray\" /></svg>",
      "<svg width=\"50\" height=\"50\"><rect width=\"50\" height=\"50\" fill=\"gray\" /></svg>",
      "<svg viewBox=\"0 0 100 100\" width=\"50\" height=\"50\"><polygon points=\"50,10 10,90 90,90\" fill=\"gray\" /></svg>",
      "<svg width=\"50\" height=\"50\"><ellipse cx=\"25\" cy=\"25\" rx=\"20\" ry=\"10\" fill=\"gray\" /></svg>"
    ],
    "answer": 0,
    "category": "Pattern"
  },
  {
    "question": "Which is NOT a square?",
    "options": [
      "<svg width=\"50\" height=\"50\"><rect width=\"50\" height=\"50\" fill=\"lime\" /></svg>",
      "<svg width=\"60\" height=\"50\"><rect width=\"60\" height=\"50\" fill=\"lime\" /></svg>",
      "<svg width=\"50\" height=\"50\"><rect width=\"50\" height=\"50\" fill=\"lime\" /></svg>",
      "<svg width=\"50\" height=\"50\"><rect width=\"50\" height=\"50\" fill=\"lime\" /></svg>"
    ],
    "answer": 1,
    "category": "Visual"
  },
  {
    "question": "Which shape shows 3 sides?",
    "options": [
      "<svg viewBox=\"0 0 100 100\" width=\"50\" height=\"50\"><polygon points=\"50,10 10,90 90,90\" fill=\"orange\" /></svg>",
      "<svg width=\"50\" height=\"50\"><rect width=\"50\" height=\"50\" fill=\"orange\" /></svg>",
      "<svg width=\"50\" height=\"50\"><circle cx=\"25\" cy=\"25\" r=\"25\" fill=\"orange\" /></svg>",
      "<svg width=\"50\" height=\"50\"><ellipse cx=\"25\" cy=\"25\" rx=\"20\" ry=\"10\" fill=\"orange\" /></svg>"
    ],
    "answer": 0,
    "category": "Math"
  },
  {
    "question": "Which shape has no corners?",
    "options": [
      "<svg width=\"50\" height=\"50\"><circle cx=\"25\" cy=\"25\" r=\"25\" fill=\"blue\" /></svg>",
      "<svg width=\"50\" height=\"50\"><rect width=\"50\" height=\"50\" fill=\"blue\" /></svg>",
      "<svg width=\"50\" height=\"50\"><polygon points=\"50,5 95,38 77,95 23,95 5,38\" fill=\"blue\" /></svg>",
      "<svg viewBox=\"0 0 100 100\" width=\"50\" height=\"50\"><polygon points=\"50,5 90,25 90,75 50,95 10,75 10,25\" fill=\"blue\" /></svg>"
    ],
    "answer": 0,
    "category": "Visual"
  },
  {
    "question": "Which shape has the most sides?",
    "options": [
      "<svg viewBox=\"0 0 100 100\" width=\"50\" height=\"50\"><polygon points=\"50,5 95,38 77,95 23,95 5,38\" fill=\"purple\" /></svg>",
      "<svg width=\"50\" height=\"50\"><rect width=\"50\" height=\"50\" fill=\"purple\" /></svg>",
      "<svg viewBox=\"0 0 100 100\" width=\"50\" height=\"50\"><polygon points=\"50,5 90,25 90,75 50,95 10,75 10,25\" fill=\"purple\" /></svg>",
      "<svg width=\"50\" height=\"50\"><circle cx=\"25\" cy=\"25\" r=\"25\" fill=\"purple\" /></svg>"
    ],
    "answer": 2,
    "category": "Pattern"
  },
  {
    "question": "Identify the odd shape out.",
    "options": [
      "<svg width=\"50\" height=\"50\"><circle cx=\"25\" cy=\"25\" r=\"25\" fill=\"red\" /></svg>",
      "<svg width=\"50\" height=\"50\"><ellipse cx=\"25\" cy=\"25\" rx=\"20\" ry=\"10\" fill=\"red\" /></svg>",
      "<svg width=\"50\" height=\"50\"><rect width=\"50\" height=\"50\" fill=\"red\" /></svg>",
      "<svg width=\"50\" height=\"50\"><rect width=\"25\" height=\"50\" fill=\"red\" /></svg>"
    ],
    "answer": 3,
    "category": "Logic"
  }
];

const categoryToDifficulty = {
  Verbal: "easy",
  General: "easy",
  Math: "medium",
  Logic: "medium",
  Pattern: "medium",
  Visual: "hard"
};

const questions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 15);

let currentQuestion = 0;
let score = 0;
let timer = 30;
let interval;
let totalTimeTaken = 0;
let startTime;

let categoryScores = {
  Math: 0,
  Logic: 0,
  Verbal: 0,
  Pattern: 0,
  General: 0
};

let difficultyScores = {
  easy: 0,
  medium: 0,
  hard: 0
};

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("timer");
const progressEl = document.getElementById("progress");

function showQuestion() {
  if (currentQuestion === 0) {
    startTime = Date.now(); // ✅ Correct place to initialize
  }
  clearInterval(interval);
  timer = 30;
  timerEl.textContent = `⏱️ ${timer}s`;
  updateProgress();

  const q = questions[currentQuestion];
  questionEl.innerHTML = `<div class="text-xl font-semibold mb-4">${q.question}</div>`;
  optionsEl.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.innerHTML = `<div class="flex justify-center items-center">${option}</div>`;
    // btn.className = "bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded m-2 shadow hover:scale-105 transition-all";
    btn.className = "w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg  hover:scale-105 transition-transform duration-200"
    btn.onclick = () => checkAnswer(index);
    optionsEl.appendChild(btn);
  });

  interval = setInterval(() => {
    timer--;
    timerEl.textContent = `⏱️ ${timer}s`;
    if (timer === 0) nextQuestion();
  }, 1000);
}

function checkAnswer(selectedIndex) {
  const current = questions[currentQuestion];
  const categoryToDifficulty = {
    Verbal: "easy",
    General: "easy",
    Math: "medium",
    Logic: "medium",
    Pattern: "medium",
    Visual: "hard"
  };
  const difficulty = categoryToDifficulty[current.category] || "medium";

  questions[currentQuestion].userAnswer = selectedIndex;

  if (selectedIndex === current.answer) {
    score++;
    categoryScores[current.category]++;
    difficultyScores[difficulty]++;
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
  if (typeof startTime !== "undefined") {
    const endTime = Date.now();
    const totalTimeTaken = Math.floor((endTime - startTime) / 1000);
    localStorage.setItem("totalTimeTaken", totalTimeTaken);
  }
  localStorage.setItem("iqScore", score);
  localStorage.setItem("categoryScores", JSON.stringify(categoryScores));
  localStorage.setItem("difficultyScores", JSON.stringify(difficultyScores));
  localStorage.setItem("answeredQuestions", JSON.stringify(questions));
  localStorage.setItem("hasPaid", "false");
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
