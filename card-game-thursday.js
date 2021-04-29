class VisualCard {
  constructor(card) {
    this.card = card;
  }

  x = 40;
  y = 40;
  isDragging = false;

  drag() {
    if (this.isDragging) {
      this.x = mouseX;
      this.y = mouseY;
    }
  }

  getIcon() {
    //this.card.suit
    //:hearts: :diamonds: :spades: :clubs:

    if (this.card.suit === "Diamonds") {
      return ":diamonds:";
    } else if (this.card.suit === "Hearts") {
      return ":hearts:";
    } else if (this.card.suit === "Spades") {
      return ":spades:";
    } else if (this.card.suit === "Clubs") {
      return ":clubs:";
    }
  }

  draw() {
    this.drag();
    push();

    translate(this.x, this.y);

    fill("black");
    rect(0, 0, 150, 200, 7);

    stroke("goldenrod");
    strokeWeight(5);
    rect(0, 0, 150, 200, 7);

    fill(this.card.color);
    textSize(100);
    textAlign(CENTER);
    text(this.getIcon(), 75, 130);

    textSize(30);
    textAlign(LEFT);
    text(this.card.name, 15, 30);

    textAlign(RIGHT);
    text(this.card.name, 140, 190);
    pop();
  }
}
let dealer = new Dealer();

let card = dealer.getCard();

let hand = dealer.getHand();

var setup = function () {
  createCanvas(1000, 800);
};
var draw = function () {
  background("#213317");
  for (let index = 0; index < hand.length; index++) {
    const card = hand[index];
    let visualCard = new VisualCard(card);
    visualCard.x = 100 * index;
    visualCard.draw();
  }
};

// visualCard = new VisualCard();

window.mousePressed = function () {
  VisualCard.isDragging = true;
};
window.mouseReleased = function () {
  VisualCard.isDragging = false;
};
