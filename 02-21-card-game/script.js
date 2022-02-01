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
        "1": 10,
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
    isDealPressed: false,
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
    if (game.isStand === false && game.isDealPressed === true) {
        let card = randomCard();
        showCard(card, you);
        updateScore(card, you);
        showScore(you);
    }
}

const hitButton = document.querySelector(".hit");
hitButton.addEventListener("click", blackjackHit);

const updateScore = (card, activePlayer) => {
    if (card[0] === "A") {
        if (activePlayer.score + game.cardsMap.A[1] <= 21) {
            activePlayer.score += game.cardsMap.A[1]
        } else {
            activePlayer.score += game.cardsMap.A[0]
        }
    } else {
        activePlayer.score += game.cardsMap[card[0]]
    }
    console.log(activePlayer.score)
}

const showScore = (activePlayer) => {
    if (activePlayer.score > 21) {
        document.querySelector(activePlayer.scoreSpan).innerText = `(${activePlayer.score})` + String.fromCodePoint(128565);
        document.querySelector(activePlayer.scoreSpan).style.color = "#c20d06";
        document.querySelector(activePlayer.scoreSpan).style.textShadow = "1px 1px 1px #03071e";
    } else {
        document.querySelector(activePlayer.scoreSpan).innerText = activePlayer.score;
    }
}

const blackjackStand = () => {
    if (game.pressOnce === false && game.isDealPressed === true) {
        let card = randomCard();
        let dealerCards = document.querySelector(game.dealer.div).querySelectorAll("img");
        dealerCards[0].src = `./images/${card}.svg`;

        for (i = 0; i < dealerCards.length; i++) {
            const getValue = dealerCards[i].src.slice(29, -5);
            updateScore(getValue, dealer)
        }

        showScore(dealer);

        game.isStand = true;
        game.isTurnsOver = true;
        game.pressOnce = true;
    }
}

const standButton = document.querySelector(".stand");
standButton.addEventListener("click", blackjackStand);

const blackjackDeal = () => {
    if (game.isTurnsOver === true || game.isDealPressed === false) {
        let yourImages = document.querySelector(".your-box").querySelectorAll("img");
        let dealerImages = document.querySelector(".dealer-box").querySelectorAll("img");

        you.score = 0;
        dealer.score = 0;

        document.querySelector(".your-result").textContent = 0;
        document.querySelector(".dealer-result").textContent = 0;

        document.querySelector(".your-result").style.color = "#ffe8d6";
        document.querySelector(".dealer-result").style.color = "#ffe8d6";

        document.querySelector(".your-result").style.textShadow = "none";
        document.querySelector(".dealer-result").style.textShadow = "none";

        for (let i = 0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }

        for (let i = 0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }

        game.isStand = false;
        game.pressOnce = false;
        game.isTurnsOver = false;
        game.isDealPressed = true;

        let card = randomCard();
        dealerCards(card, dealer);
    }
}

const dealerCards = (card, dealer) => {
    let cardImageOne = document.createElement("img");
    cardImageOne.src = `./images/back.svg`;
    document.querySelector(dealer.div).appendChild(cardImageOne);
    let cardImageTwo = document.createElement("img");
    cardImageTwo.src = `./images/${card}.svg`;
    document.querySelector(dealer.div).appendChild(cardImageTwo);

    document.querySelector(dealer.scoreSpan).innerText = "???";
}

const dealButton = document.querySelector(".deal");
dealButton.addEventListener("click", blackjackDeal);
