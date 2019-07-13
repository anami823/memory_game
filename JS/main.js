var cards =[
    {
        rank: "queen",
        suit: "hearts",
        image: "images/queen-of-hearts.png"
    }, {
        rank: "queen",
        suit: "diamonds",
        image: "images/queen-of-diamonds.png"
    }, {
        rank: "king",
        suit: "hearts",
        image: "images/king-of-hearts.png"
    }, {
        rank: "king",
        suit: "diamonds",
        image: "images/king-of-diamonds.png"
    }  
];
var cardsInPlay = [];

const checkForMatch = () => {
    if (cardsInPlay.length === 2){
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
        } else {
            alert("Sorry, try again");
        }
    }
}

const flipCard = (cardId) => {

    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].suit)
    console.log(cards[cardId].image)
    //Add card flipped by plyer to cardsInPlay
    cardsInPlay.push(cards[cardId].rank);
    console.log("Cards in play: " + cardsInPlay);
    checkForMatch()
}

flipCard(0)
flipCard(2)

