let createCard = function (suit, rank) {
  let name = rank;
  switch (rank) {
    case 2:
      name = "Two of " + suit;
      break;
    case 3:
      name = "Three of " + suit;
      break;
    case 4:
      name = "Four of " + suit;
      break;
    case 5:
      name = "Five of " + suit;
      break;
    case 6:
      name = "Six of " + suit;
      break;
    case 7:
      name = "Seven of " + suit;
      break;
    case 8:
      name = "Eight of " + suit;
      break;
    case 9:
      name = "Nine of " + suit;
      break;
    case 10:
      name = "Ten of " + suit;
      break;
    case 11:
      name = "Jack of " + suit;
      break;
    case 12:
      name = "Queen of " + suit;
      break;
    case 13:
      name = "King of " + suit;
      break;
    case 14:
      name = "Ace of " + suit;
      break;
  }

  let color = "red";
  if (suit === "Clubs" || suit === "Spades") {
    color = "black";
  }

  let card = {
    rank: rank,
    suit: suit,
    color: color,
    name: name,
  };
  return card;
};

console.log([
  createCard("Spades", 5),
  createCard("Spades", 10),
  createCard("Spades", 13),
]);

let deck = [];

for (let rank = 2; rank < 15; rank++) {
  deck.push(createCard("Spades", rank));
  deck.push(createCard("Clubs", rank));
  deck.push(createCard("Diamonds", rank));
  deck.push(createCard("Hearts", rank));
}
console.table(deck);

let getHand = function (cardCount) {
  let hand = [];

  for (let i = 0; i < cardCount; i++) {
    rng = Math.floor(Math.random() * deck.length);
    hand.push(deck[rng]);
    deck.splice(rng, 1);
  }
  return hand;
};

let player1Hand = getHand(1);
let player2Hand = getHand(1);

console.log("Player1's Highest Card");
console.table(player1Hand);

console.log("Player2's Highest Card");
console.table(player2Hand);

let score = function (playerHand) {
  total = 0;

  for (let i = 0; i < playerHand.length; i++) {
    total += playerHand[i].rank;
  }

  return total;
};

let winner = function (player1Hand, player2Hand) {
  if (player1Hand > player2Hand) {
    return "Player1 wins!";
  } else if (player2Hand > player1Hand) {
    return "Player2 wins!";
  } else {
    return "Tie!";
  }
};

console.log(winner(score(player1Hand), score(player2Hand)));
