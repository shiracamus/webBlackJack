import { Deck } from "./Deck.js";
import { Player, Computer } from './Player.js';
import { PlayerView } from "./PlayerView.js";

const deck = new Deck();
const human = new Player();
const computer = new Computer();
const humanView = new PlayerView(human, 'human');
const computerView = new PlayerView(computer, 'computer');

const $hitButton = document.getElementById("hit");
const $standButton = document.getElementById("stand");
const $replayButton = document.getElementById("replay");
const $judge = document.getElementById("judge");

export function play() {
    $replayButton.disabled = true;
    computer.hold(deck.draw());
    computer.hold(deck.draw());
    computerView.showCard();
    human.hold(deck.draw());
    human.hold(deck.draw());
    humanView.show();
}

function playHuman() {
    human.hold(deck.draw());
    humanView.show();
    if (human.isBust()) {
        playComputer();
    }
}

function playComputer() {
    $hitButton.disabled = true;
    $standButton.disabled = true;
    while (computer.hit()) {
        computer.hold(deck.draw());
    }
    computerView.show();
    judge();
}

function judge() {
    $replayButton.disabled = false;
    if (human.isBlackJack()) {
        if (computer.isBlackJack()) {
            $judge.textContent = "引き分け";
        } else {
            $judge.textContent = "あなたの勝ち";
        }
    } else if (computer.isBlackJack()) {
        $judge.textContent = "あなたの負け";
    } else if (human.isBust()) {
        if (computer.isBust()) {
            $judge.textContent = "引き分け";
        } else {
            $judge.textContent = "あなたの負け";
        }
    } else if (computer.isBust()) {
        $judge.textContent = "あなたの勝ち";
    } else {
        const humanScore = human.score();
        const computerScore = computer.score();
        if (humanScore == computerScore) {
            $judge.textContent = "引き分け";
        } else if (humanScore > computerScore) {
            $judge.textContent = "あなたの勝ち";
        } else {
            $judge.textContent = "あなたの負け";
        }
    }
}

$hitButton.addEventListener('click', (e) => { playHuman(); });
$standButton.addEventListener('click', (e) => { playComputer(); });
$replayButton.addEventListener('click', (e) => { location.reload() });
