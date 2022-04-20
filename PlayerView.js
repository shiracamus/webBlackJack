export class PlayerView {

    constructor(player) {
        this.player = player;
        const cards = [];
        for (let i = 1; i <= 8; i++) {
            cards.push(document.getElementById(`${player.name}Card${i}`));
        }
        this.$cards = cards;
        this.$score = document.getElementById(`${player.name}Score`);
        this.$info = document.getElementById(`${player.name}Info`);
    }

    showCard() {
        this.$cards[0].src = this.player.firstCard().image;
    }

    showCards() {
        this.player.forEachCard((card, i) => {
            this.$cards[i].src = card.image;
        });
    }

    showScore() {
        this.$score.textContent = this.player.score();
    }

    showStatus() {
        if (this.player.isBlackJack()) {
            this.$info.textContent = `ブラックジャック!`;
        } else if (this.player.isBust()) {
            this.$info.textContent = `バーストしました`;
        }
    }

    show() {
        this.showCards();
        this.showScore();
        this.showStatus();
    }
}
