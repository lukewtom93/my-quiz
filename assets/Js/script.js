/// const to get all the elements from the DOM  ///
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultDiv = document.getElementById('result');
const restartButton = document.getElementById('restart-btn');

let shuffleQuestions, currentQuestion, score;

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

/**
 * Starts the quiz with a score of 0
 * 
 */
function startQuiz() {
  questionContainer.style.display ='flex';
  score = 0;
  currentQuestion = 0;
  shuffleQuestions = questions.sort(() => Math.random() - 0.5);
  nextButton.classList.remove('hide');
  restartButton.classList.add('hide');
  resultDiv.classList.add('hide');
  setNextQuestion()
}



/**
 * Creates elements in the DOM
 * to display questions
 */
function showQuestion(question) {
  questionElement.innerHTML = question.question;
  question.answers.forEach((answer, index) => {
    const inputGroup = document.createElement('div');
    inputGroup.classList.add('input-group');

    const radio = document.createElement('input');
    radio.type ='radio';
    radio.id = 'answer' + index;
    radio.name = 'answer'
    radio.value = index;

    const label = document.createElement('label');
    label.htmlFor = 'answer' + index
    label.innerText = answer.text;

    inputGroup.appendChild(radio);
    inputGroup.appendChild(label);
    answerButton.appendChild(inputGroup);
  })

}

/**
 * Gets questions vairable to
 * input in the showQuestion function
 * and resets the question
 */
function setNextQuestion() {
  resetQuestion()
  showQuestion(shuffleQuestions[currentQuestion])

}

/**
 * Removes the current answer buttons
 */
function resetQuestion() {
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

/**
 * Displays the score at the end
 * of the quiz.
 */
function endQuiz() {
  questionContainer.style.display = 'none';
  nextButton.classList.add('hide');
  restartButton.classList.remove('hide');
  resultDiv.classList.remove('hide');
  resultDiv.innerText = `Your Final Score: ${score} / ${shuffleQuestions.length}`;

}

/// Event Listener for the next button ///
nextButton.addEventListener('click', () => {
  const answerIndex = Array.from(
    answerButton.querySelectorAll('input')
  ).findIndex((radio) => radio.checked);
  if (answerIndex !== -1) {
    if (shuffleQuestions[currentQuestion].answers[answerIndex].correct) {
      score++;
    }
    currentQuestion++;
    if (shuffleQuestions.length > currentQuestion) {
      setNextQuestion()
    } else {
      endQuiz()
    }
  } else {
    alert('Please select an answer!')
  }
})

restartButton.addEventListener('click', startQuiz)