'use strict';

const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const guess = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const body = document.querySelector('body');

let secretNumber = Math.trunc(Math.random() * 20) + 1;

number.textContent = secretNumber;

checkButton.addEventListener('click', guessMyNumber);

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
    body.style.backgroundColor = '#CE1212';
  }
}

const displayMessage = msg => {
  message.textContent = msg;
};

const highAndLow = (guess, secretNumber) => {
  guess > secretNumber ? '🙊 Very high!' : '🙊 Very low!';
};
