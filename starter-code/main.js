
// var  cardOne = "qeen";
// var cardTwo = "qeen";
// var cardThree = "king";
// var cardFour = "king";

function createBoard() {

var board = document.getElementById('game-board');
board.classList.toggle('show');

var cards = ['queen', 'queen', 'king', 'king'];

	for(var i=0; i<cards.length; i++) {

	var cardElement = document.createElement ('div');

	cardElement.className = 'card';

	board.appendChild(cardElement);}


}

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

