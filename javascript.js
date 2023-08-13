const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const resultElement = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'Berlin', 'London', 'Madrid'],
    correctAnswer: 0,
  },
  {
    question: 'Which programming language is often used for web development?',
    options: ['Java', 'Python', 'JavaScript', 'C++'],
    correctAnswer: 2,
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Earth', 'Jupiter', 'Mars', 'Saturn'],
    correctAnswer: 1,
  },
  {
    question: 'Which scientist developed the theory of relativity?',
    options: ['Isaac Newton', 'Galileo Galilei', 'Albert Einstein', 'Nikola Tesla'],
    correctAnswer: 2,
  },
  {
    question: 'What is the chemical symbol for the element gold?',
    options: ['Go', 'Gl', 'Au', 'Gd'],
    correctAnswer: 2,
  },
  {
    question: 'In which year did the Titanic sink?',
    options: ['1902', '1912', '1922', '1932'],
    correctAnswer: 1,
  },
  {
    question: 'Which famous painting is also known as "La Gioconda"?',
    options: ['Starry Night', 'Mona Lisa', 'The Persistence of Memory', 'The Scream'],
    correctAnswer: 1,
  },
  {
    question: 'Which planet is known as the "Red Planet"?',
    options: ['Venus', 'Jupiter', 'Mars', 'Neptune'],
    correctAnswer: 2,
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
    correctAnswer: 0,
  },
  {
    question: 'What is the capital of Japan?',
    options: ['Tokyo', 'Kyoto', 'Osaka', 'Seoul'],
    correctAnswer: 0,
  },
  {
    question: 'Which famous scientist formulated the laws of motion and universal gravitation?',
    options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Nikola Tesla'],
    correctAnswer: 0,
  },
  {
    question: 'Which planet is known as the "Morning Star" or "Evening Star"?',
    options: ['Venus', 'Mercury', 'Mars', 'Saturn'],
    correctAnswer: 0,
  },
// Add more questions...
];

function displayQuestion(questionIndex) {
  const question = questions[questionIndex];
  questionElement.textContent = question.question;

  optionsElement.innerHTML = '';
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.addEventListener('click', () => checkAnswer(index));
    optionsElement.appendChild(button);
  });

  resultElement.textContent = '';
  nextButton.disabled = true;
}

function checkAnswer(selectedIndex) {
  const correctIndex = questions[currentQuestionIndex].correctAnswer;
  if (selectedIndex === correctIndex) {
    score++;
    resultElement.textContent = 'Correct!';
  } else {
    resultElement.textContent = 'Incorrect';
  }
  nextButton.disabled = false;
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion(currentQuestionIndex);
  } else {
    showFinalScore();
  }
});

function showFinalScore() {
  questionElement.textContent = `Your score: ${score} out of ${questions.length}`;
  optionsElement.innerHTML = '';
  resultElement.textContent = '';
  nextButton.style.display = 'none';
}

displayQuestion(currentQuestionIndex);