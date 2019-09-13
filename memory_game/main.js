console.log("Up and running!");

var cards = [
	{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
	},
	{
	rank: "queen",
	suit: "diaomands",
	cardImage:"images/queen-of-diamonds.png"
	},
	{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
	},
	{
	rank: "king",
	suit: "diaomands",
	cardImage: "images/king-of-diamonds.png"
	}
];

let cardsInPlay = [];

function flipCard() {
	var cardId = this.getAttribute("data-id");
	console.log("User flipped " + " " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
	checkForMatch();
}
}


function createBoard() {
	for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', "images/back.png");
    cardElement.setAttribute('data-id', i)
    cardElement.addEventListener("click", flipCard);
    document.getElementById('game-board').appendChild(cardElement);
}
}

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}
}


createBoard();

// checkForMatch();



