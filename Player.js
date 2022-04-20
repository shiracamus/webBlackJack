export class Player {

    constructor() {
        this._cards = [];
    }

    hold(card) {
        this._cards.push(card);
    }

    firstCard() {
        return this._cards[0];
    }

    forEachCard(callback) {
        return this._cards.forEach(callback);
    }

    score() {
        let total = this._cards.reduce((total, card) => total + Math.min(card.rank, 10), 0);
        if (total <= 11 && this.hasAce()) {
            total += 10;
        }
        return total;
    }

    hasAce() {
        return this._cards.some(card => card.rank == 1);
    }

    hasTen() {
        return this._cards.some(card => card.rank >= 10);
    }

    isBlackJack() {
        return this._cards.length == 2 && this.hasAce() && this.hasTen();
    }

    isBust() {
        return this.score() > 21;
    }
}

export class Computer extends Player {
    hit() {
        return this.score() < 16;
    }
}
