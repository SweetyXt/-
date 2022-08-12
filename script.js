'use strict'

let scoreNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('no Number');
  } else if (guess === scoreNumber) {
    displayMessage('You are right');
    document.querySelector('.number').textContent = scoreNumber;

    document.querySelector('.body').style.backgroundColor = '#60b347';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== scoreNumber) {
    if (score > 1) {
      displayMessage(guess > scoreNumber ? ' Too high!' : ' Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost');
      document.querySelector('score').textContent = 0;
    }
  }
})

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  scoreNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})