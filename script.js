'use strict';

let secretNumber = 1 + Math.trunc(Math.random() * 20);
let highscore = 0;
let score = 20;

function displayMessage(message){
	document.querySelector('.message').textContent = message;
}

function decreaseScore(){
	score--;
	document.querySelector('.score').textContent = score;
}

document.querySelector('.again').addEventListener('click', function(){
	score = 20;
	secretNumber = 1 + Math.trunc(Math.random() * 20);

	document.querySelector('.score').textContent = score;
	displayMessage('Start guessing...');
	document.querySelector('body').style.backgroundColor = '#222222';
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = '';
})

document.querySelector('.check').addEventListener('click', function(){
	
	const guess = Number(document.querySelector('.guess').value);
	if(!score){
		document.querySelector('.message').textContent = 'You loose!';
	}
	else{
		if(!guess){
			document.querySelector('.message').textContent = 'No number';
		}else if(guess === secretNumber){
			displayMessage('Correct Number');
			document.querySelector('body').style.backgroundColor = '#60b347';
			document.querySelector('.number').textContent = secretNumber;
			if(score > highscore){
				highscore = score 
			}
			document.querySelector('.highscore').textContent = highscore;
		}else if(guess > secretNumber){
			displayMessage('Too hight');
			decreaseScore();
		}
		else{
			displayMessage('Too low');
			decreaseScore();
		}
	}
})

