const computerChoice = document.getElementById('computer-choice');
const userChoice = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const choices = document.querySelectorAll('button');

choices.forEach((button) =>
  button.addEventListener('click', () => {
    userChoice.innerHTML = button.innerHTML;
    generateComputerChoice();
    generateResult();
  })
);

const generateComputerChoice = () => {
  const getNumber = Math.floor(Math.random() * choices.length);
  computerChoice.innerHTML = `${
    getNumber === 0 ? 'Rock' : `${getNumber === 1 ? 'Paper' : 'Scissor'}`
  }`;
};

const generateResult = () => {
  if (computerChoice.innerHTML === userChoice.innerHTML) {
    resultDisplay.innerHTML = 'It is a draw!';
  }
  if (computerChoice.innerHTML === 'Rock' && userChoice.innerHTML === 'Paper') {
    resultDisplay.innerHTML = 'You won!';
  }
  if (computerChoice.innerHTML === 'Paper' && userChoice.innerHTML === 'Rock') {
    resultDisplay.innerHTML = 'You lost!';
  }
  if (
    computerChoice.innerHTML === 'Scissor' &&
    userChoice.innerHTML === 'Paper'
  ) {
    resultDisplay.innerHTML = 'You lost!';
  }
  if (
    computerChoice.innerHTML === 'Paper' &&
    userChoice.innerHTML === 'Scissor'
  ) {
    resultDisplay.innerHTML = 'You won!';
  }
  if (
    computerChoice.innerHTML === 'Rock' &&
    userChoice.innerHTML === 'Scissor'
  ) {
    resultDisplay.innerHTML = 'You lost!';
  }
  if (
    computerChoice.innerHTML === 'Scissor' &&
    userChoice.innerHTML === 'Rock'
  ) {
    resultDisplay.innerHTML = 'You won!';
  }
};

document.documentElement.style.backgroundColor = 'red';
