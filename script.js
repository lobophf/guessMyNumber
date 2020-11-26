'use strict';

const secretNumber = 1 + Math.trunc(Math.random() * 20);


document.querySelector('.check').addEventListener('click', function(){
	const guess = Number(document.querySelector('.guess').value);
	if(!guess){
		document.querySelector('.message').textContent = 'No number';
	}else if(guess === secretNumber){
		document.querySelector('.message').textContent = 'Correct Number';	
	}else if(guess > secretNumber){
		document.querySelector('.message').textContent = 'Too hight';
	}
	else{
		document.querySelector('.message').textContent = 'Too low';
	}
})

