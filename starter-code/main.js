
// var  cardOne = "qeen";
// var cardTwo = "qeen";
// var cardThree = "king";
// var cardFour = "king";

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var board = document.getElementById('game-board');

function createBoard () {

	for(var i=0; i<cards.length; i++) {

	var cardElement = document.createElement ('div');

	cardElement.className = 'card';

	cardElement.setAttribute('data-card', cards[i]);

	cardElement.addEventListener('click', isTwoCards);

	board.appendChild(cardElement);
	board.appendChild(cardElement);
}

}

function isMatch(cards) {

	if (cards[0] === cards[1]) {

		alert ("You found a match!");
	}
	else {
		alert ("Sorry, try again.");
	}
	}

function isTwoCards () {
 
 cardsInPlay.push(this.getAttribute('data-card'));

 console.log (this.getAttribute('data-card'));

 if (this.getAttribute('data-card') === 'king') {
 	this.innerHTML = "<img src = 'images/king.png'>";
} else {
	this.innerHTML = "<img src = 'images/queen.png'>";
 }

 if (cardsInPlay.length === 2) {

 	isMatch(cardsInPlay);

 	cardsInPlay = [];
 }
}

createBoard();

// if (cardTwo === cardFour) {
// 	alert ('You found a match!');
// }
// else {
// 	alert ('Sorry, try again.');
// }

// if (cardOne === cardThree) {
// 	alert ('You found a match!');
// }
// else {
// 	alert ('Sorry, try again.');
// }

// if (cardOne === cardTwo) {
// 	alert ('You found a match!');
// }
// else {
// 	alert ('Sorry, try again.');
// }

// if (cardThree === cardFour) {
// 	alert ('You found a match!');
// }
// else {
// 	alert ('Sorry, try again.');
// }

// if (cardOne === cardThree) {
// 	alert ('You found a match!');}

// else  {
// 	alert ('Sorry, try again.');
// }

// if (cardTwo === cardThree) {
// 	alert ('You found a match');
// }
// else {
// 	alert ('Sorry, try again');
// }

