// Create dictionary:
const game = () => {
    const player = {
        scoreSpan: ".your-result",
        div: ".your-box",
        boxSize: ".flex row-2",
        score: 0
    }

    const dealer = {
        scoreSpan: ".dealer-result",
        div: ".dealer-box",
        boxSize: ".flex row-2",
        score: 0
    }

    const cards = [
        "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "JC", "QC", "KC", "AC",
        "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "JD", "QD", "KD", "AD",
        "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H", "JH", "QH", "KH", "AH",
        "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "JS", "QS", "KS", "AS",
    ]

    const cardsMap = {
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
    }

    wins: 0;
    losses: 0;
    draws: 0;
    isStand: false;
    isTurnsOver: false;
    pressOnce: false;
}

// Add variables for player and dealer:
const you = game["player"];
const dealer = game["dealer"];

const windowWidth = window.screen.width;
const windowHeight = window.screen.height;
const winner;

document.querySelector(".btn hit").addEventListener(click, blackjackHit);

// blackjackHit = () => {
//     if ()
// }
