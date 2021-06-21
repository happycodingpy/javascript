'use strict';

const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const guess = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const myHighscore = document.querySelector('.highscore');

const body = document.querySelector('body');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let myScore = 20;
let highscore = 0;

checkButton.addEventListener('click', guessMyNumber);
againButton.addEventListener('click', againReset);

function guessMyNumber() {
  const guessNum = Number(guess.value);

  // verificamos si hay un valor o no
  // !guessNum siempre sera falso
  // por lo que si no hay un number damos un mensaje
  if (!guessNum) {
    displayMessage('🙈 No number!');
  } else if (guessNum === secretNumber) {
    displayMessage('🐵 Number correct!');
    number.textContent = secretNumber;
    body.style.backgroundColor = '#7952B3';
    number.style.width = '30rem';

    if (myScore > highscore) {
      highscore = myScore;
      myHighscore.textContent = highscore;
    }
  } else if (guessNum !== secretNumber) {
    if (myScore > 1) {
      displayMessage(guessSecNum(guessNum, secretNumber));
      myScore--;
      displayHighScore(myScore);
    } else {
      displayMessage('🐒 You lost the game!');
      score.textContent = 0;
      body.style.backgroundColor = '#301B3F';
    }
  }
}

const displayMessage = msg => {
  message.textContent = msg;
};

const guessSecNum = (guess, secretNumber) =>
  guess > secretNumber ? '🙊 Very high!' : '🙊 Very low!';

const displayScore = score => {
  score.textContent = myScore;
};

const hideSecreteNumber = secNum => (number.textContent = secNum);

const displayHighScore = highscore => {
  myHighscore.textContent = highscore;
};

function againReset() {
  myScore = 20;
  hideSecreteNumber(secretNumber);
  hideSecreteNumber('?');
  score.textContent = myScore;
  score.textContent = 0;
  guess.value = '';
  displayMessage('Start guessing...');
  body.style.backgroundColor = '#161616';
  number.style.width = '30rem';
}
