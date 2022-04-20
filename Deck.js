import { Card } from './Card.js';

export class Deck {

    constructor() {
        this.refill();
    }

    refill() {
        this._cards = [];
        "scdh".split('').forEach(suit => {
            for (let rank = 1; rank <= 13; rank++) {
                this._cards.push(new Card(rank, `./img/${suit}${String(rank).padStart(2, 0)}.png`));
            }
        });
        this.shuffle();
    }

    // Fisher-Yatesシャッフル
    shuffle() {
        for (let i = this._cards.length - 1; i >= 1; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const tmp = this._cards[i];
            this._cards[i] = this._cards[j];
            this._cards[j] = tmp;
        }
    }

    draw() {
        if (this._cards.length == 0) {
            this.refill();
        }
        return this._cards.pop();
    }
}
