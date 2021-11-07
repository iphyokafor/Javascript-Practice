'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = message => {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //when there is no input
    if (!guess) {
        displayMessage('⛔ No number!');

        //when player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct number!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;

            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        //when guess is wrong

        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📈 Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💣 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
});