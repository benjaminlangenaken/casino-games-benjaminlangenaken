// Create dictionary:
const game = {
    player: {
        scoreSpan: ".your-result",
        div: ".your-box",
        boxSize: ".flex row-2",
        score: 0
    },

    dealer: {
        scoreSpan: ".dealer-result",
        div: ".dealer-box",
        boxSize: ".flex row-2",
        score: 0
    },

    cards: [
        "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "JC", "QC", "KC", "AC",
        "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "JD", "QD", "KD", "AD",
        "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H", "JH", "QH", "KH", "AH",
        "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "JS", "QS", "KS", "AS",
    ],

    cardsMap: {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 10,
        "Q": 10,
        "K": 10,
        "A": [1, 11]
    },

    wins: 0,
    losses: 0,
    draws: 0,
    isStand: false, // Check whether player has pressed 'Stand' button
    isTurnsOver: false, // Check if PC has finished with dealing cards
    pressOnce: false, // Prevent player from pressing buttons while it's the dealers turn
}

// Add variables for player and dealer:
const you = game.player;
const dealer = game.dealer;

const windowWidth = window.screen.width; // Adjust card size based on window screensize
// const winner;

let randomCard = () => {
    let randomIndex = Math.floor(Math.random() * 52);
    return game.cards[randomIndex];
}

// let widthSize = () => {
//     if (windowWidth > 1000) {
//         let newWidthSize = window.screen.width * 0.07;
//         return newWidthSize;
//     } else {
//         return window.screen.width * 0.18;
//     }
// }

let showCard = (card, activePlayer) => {
    if (activePlayer.score <= 21) {
        let cardImage = document.createElement("img");
        cardImage.src = `./images/${card}.svg`;
        // cardImage.style.width = `${widthSize()}px`;
        document.querySelector(activePlayer.div).appendChild(cardImage);
    }
}

let blackjackHit = (hitButton) => {
    if (game.isStand === false) {
        let card = randomCard();
        showCard(card, you);
        console.log(card)
    }
}

const hitButton = document.querySelector(".hit");
hitButton.addEventListener("click", blackjackHit);
