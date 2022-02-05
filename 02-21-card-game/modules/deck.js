const suits = ["C", "D", "H", "S"];
const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
];

export default class deck {
    constructor(cards = freshDeck()) {
        this.cards = cards;
    }

    get numberOfCards() {
        return this.cards.length;
    }

    pop = () => {
        return this.cards.shift;
    };

    push = (card) => {
        this.cards.push(card);
    };

    shuffle = () => {
        for (let i = this.numberOfCards - 1; i > 0; i--) {
            // Create random index that's before the card we're currently on
            const newIndex = Math.floor(Math.random() * (i + 1));
            // Swap the card that we're currently on with the randomly generated card
            const oldValue = this.cards[newIndex];
            // oldValue is only used to be able to access the random index before we overwrite it with this.cards[i]
            this.cards[newIndex] = this.cards[i];
            // swap our index with the random one
            this.cards[i] = oldValue;
        }
    };
}

class card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

let freshDeck = () => {
    // flatmap combines the otherwise 4 separate arrays into 1
    return suits.flatMap((suit) => {
        return values.map((value) => {
            return new card(suit, value);
        });
    });
};
