export class PlayerView {

    constructor(player, name) {
        this.player = player;
        this.$cards = [];
        for (let i = 1; i <= 8; i++) {
            this.$cards.push(document.getElementById(`${name}Card${i}`));
        }
        this.$score = document.getElementById(`${name}Score`);
        this.$info = document.getElementById(`${name}Info`);
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

    showInfo() {
        if (this.player.isBlackJack()) {
            this.$info.textContent = `ブラックジャック!`;
        } else if (this.player.isBust()) {
            this.$info.textContent = `バーストしました`;
        }
    }

    show() {
        this.showCards();
        this.showScore();
        this.showInfo();
    }
}
