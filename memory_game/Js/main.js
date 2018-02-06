

var cards = [
{
  rank: "Queen",
  suit: "Hearts",
  cardImage: "images/queen-of-hearts.png"
},
{
  rank: "Queen",
  suit: "Diamonds",
  cardImage: "images/queen-of-diamonds.png"
},
{
  rank: "King",
  suit: "Hearts",
  cardImage: "images/king-of-hearts.png"
},
{
  rank: "King",
  suit: "Diamonds",
  cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

var checkForMatch = function (){
  if (cardsInPlay[0] === cardsInPlay[1]) {
alert("YEA!!! You did it!");
} else {
alert("Seriously?!? Try again.");
}
};

var flipCard = function (){
  var cardId = this.getAttribute('data-id');
  this.setAttribute ('src', cards[cardId].cardImage);
console.log("You just flipped "+ cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
console.log('suit: '+ cards[cardId].suit);
console.log('pic: ' +cards[cardId].cardImage);
if (cardsInPlay.length === 2) {checkForMatch ();
}
};


var createBoard = function (){
 for (var i = 0; i < cards.length; i++){
   var cardElement = document.createElement('img');
   cardElement.setAttribute('src', 'images/back.png');
   cardElement.setAttribute('data-id', i);
   cardElement.addEventListener('click', flipCard);
   var gameBoard = document.getElementById('game-board')
   gameBoard.appendChild(cardElement);
}
};

createBoard ();
