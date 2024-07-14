/// const for all the elements in the index.html file ///
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultDiv = document.getElementById('result');
const restartButton = document.getElementById('restart-btn');
const questions = [
    {
      question: "What is the largest island in the world?",
      answers: [
        { text: "Greenland", correct: true },
        { text: "Great Britan", correct: false },
        { text: "Borneo", correct: false },
        { text: "New Zealand", correct: false },
      ],
    },
    {
      question: "What is the largest bird of prey in the world?",
      answers: [
        { text: "Andean Condor", correct: true },
        { text: "Harpy Eagle", correct: false },
        { text: "Bald Eagle", correct: false },
        { text: "Vulture", correct: false },
      ],
    },
    {
      question: "Which country are you visiting if you are in the Taj Mahal?",
      answers: [
        { text: "Malaysia", correct: false },
        { text: "China", correct: false },
        { text: "India", correct: true },
        { text: "Nepal", correct: false },
      ],
    },
    {
      question: "What are the primary colors?",
      answers: [
        { text: "Green, Red, Blue", correct: false },
        { text: "Blue, Yellow, Green", correct: false },
        { text: "Red, Yellow, Blue", correct: true },
        { text: "Red, Green, Blue", correct: false },
      ],
    },
  ];

  startQuiz()

  function startQuiz() {
    score = 0;
    currentQuestion = 0;
    shuffleQuestions = questions.sort(() => Math.random() - 0.5);
    
    setNextQuestion()

  }

  function setNextQuestion() {

  }
