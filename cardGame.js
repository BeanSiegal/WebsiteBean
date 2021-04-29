let cl = console.log;

let suits = ["Spades", "Hearts", "Diamonds", "Clubs"];

let value = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];

let randomSuit = Math.floor(Math.random() * suits.length);
let randomValue = Math.floor(Math.random() * value.length);
cl(value[randomValue] + " of " + suits[randomSuit]);
