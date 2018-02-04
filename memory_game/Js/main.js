

var cards = ["My Girl", "My Girl", "My Man", "My Man"];
var cardsInPlay = [];

var checkForMatch = function (){
  if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("YEA!!! You did it!");
} else {
console.log("Seriously?!? Try again.");
}
};

var flipCard = function (cardId){
console.log("You just flipped "+ cards[cardId]);
cardsInPlay.push(cards[cardId]);
checkForMatch();
};

flipCard(0);
flipCard(2);

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
alert ("Yea baby, you did it!");
} else {
alert ("Seriously?!? Try again.");
}
