class Card {
  constructor({
    value,
    suit
  }) {
    this.value = value;
    this.suit = suit;
  }
}

class Deck {
  constructor() {
    this.cards = [];

    const suits = ['Spades', 'Diamonds', 'Hearts', 'Clubs'];
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    for (const suit of suits) {
      for (const value of values) {
        this.cards.push(new Card({
          value,
          suit
        }));
      }
    }
    this.shuffle();
  }

  shuffle() {
    // const deck = this.deck;
    const {
      cards
    } = this;
    let currentIndex = cards.length,
      temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
    }
    return this;
  }
}

class Game {
  constructor() {
    // this.play = function() {
    //   const round = [];
    //   round.push(player1.hand.splice(0, 1));
    //   round.push(player2.hand.splice(0, 1));
    //
    //   if(round[0][0].value > round[1][0].value){
    //     player1.hand.push(round[0][0], round[1][0]);
    //   }else{
    //     player2.hand.push(round[0][0], round[1][0]);
    //   }
    //
    // }
  }
  play() {
    const round = [];
    round.push(player1.hand.shift());
    round.push(player2.hand.shift());
      console.log(round[0], round[1]);

    if(round[0].value > round[1].value){
      player1.hand.unshift(round[0], round[1]);
    }else{
      player2.hand.unshift(round[0], round[1]);
    }
     console.log(player1.hand, player2.hand);

  }

  war(){

  }

}

class Player {
  constructor({
    name,
    hand
  } = {}) {
    this.name = name;
    this.hand = deck.cards.splice(0, 26);
  }
}


//player class and game class and game is over everythibg
const game = new Game();
const deck = new Deck();
const player1 = new Player({
  name: 'Player1'
});
const player2 = new Player({
  name: 'Player2'
});


var i = 0

while(player1.hand.length > 0 && player2.hand.length > 0){
  game.play();
  i++
}
console.log(i);
