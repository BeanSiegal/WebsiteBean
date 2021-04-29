let ct = console.table;
let deck = [];
let suit = [];
let rank = [];
let colour = [];

let createCard = function (suit, rank, colour) {
  let name = rank;
  switch (rank) {
    case 11:
      name = "Jack";
      break;

    case 12:
      name = "Queen";
      break;

    case 13:
      name = "King";
      break;

    case 14:
      name = "Ace";
      break;
  }

  let card = {
    rank: 2,
    suit: "Hearts",
    color: "red",
    name: "2",
  };
  return card;
};

console.table(createCard("Hearts", 11));
