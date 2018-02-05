

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
console.log("YEA!!! You did it!");
} else {
console.log("Seriously?!? Try again.");
}
};

var flipCard = function (cardId){
console.log("You just flipped "+ cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
checkForMatch();
console.log('suit: '+ cards[cardId].suit);
console.log('pic: ' +cards[cardId].cardImage);
};

flipCard(0);
flipCard(2);

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
alert ("Yea baby, you did it!");
} else {
alert ("Seriously?!? Try again.");
}
