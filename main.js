import {Deck} from "./Deck.js";
let img = document.getElementById("humanCard1");
img.src = "./img/c01.png";


const deck = new Deck();
console.log(deck);
console.log(deck.list);
deck.shuffle(deck.list);
console.log(deck.pickupCard().value)
// document.getElementById("test").textContent=deck.pickupCard();
















