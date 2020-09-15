var toggle = true;
class Card {
  constructor({
    value,
    suit
  }) {
    this.value = value;
    this.suit = suit;
  }
  get description() {
    const values = [null, null, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
    return `${values[this.value]} of ${this.suit}`;
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
    this.round = [];
    this.deck = new Deck();
  }

  players() {
    this.player1 = new Player({
      name: 'Player1'
    });
    this.player2 = new Player({
      name: 'Player2'
    });
  }

  play() {
    this.players();
    this.player1.hand = this.deck.cards.splice(0, 26);
    this.player2.hand = this.deck.cards.splice(0, 26);
    //console.log(this.player1.hand, this.player2.hand);





    // let i = 0;

    while (this.player1.hand.length > 0 && this.player2.hand.length > 0) {

      // if(i > 5000) {
      //   return;
      // }
      //
      // i++;


      // taking a card from the end of the players' hands
      let player1Card = this.player1.hand.shift();
      let player2Card = this.player2.hand.shift();

      console.log(`
        player 1 drew ${player1Card.description}
        player 2 drew ${player2Card.description}
      `);

      this.round = [...this.round, player1Card, player2Card];

      if (player1Card.value > player2Card.value) {
        this.player1.hand = [...this.player1.hand, ...this.round];
        this.round = [];
      } else if (player1Card.value < player2Card.value) {
        this.player2.hand = [...this.player2.hand, ...this.round];
        this.round = [];
      } else if (player1Card.value === player2Card.value) {
        console.log("It's war!");
        this.war();
      }
      console.log('player1 hand', this.player1.hand);
      console.log('player2 hand', this.player2.hand);
      // console.log(this.player1.hand, this.player2.hand);

    }



    if (this.player1.hand.length > 0) {
      alert('Player 1 won!');
    } else {
      alert('Player 2 won!');
    }



  }



  war() {
    const cardsDown = [...this.player1.hand.splice(0, 1), ...this.player2.hand.splice(0, 1)];
    console.log(this.player1.hand.length);
    console.log(this.player2.hand.length);
    // debugger;

    if (cardsDown.length === 2) {
      this.round = [...this.round, ...cardsDown];
    }

  }

}

class Player {
  constructor({
    name,
    hand
  } = {}) {
    this.name = name;
    this.hand = [];
  }
}



const game = new Game();
// const deck = new Deck();
// const player1 = new Player({
//   name: 'Player1'
// });
// const player2 = new Player({
//   name: 'Player2'
// });


//var i = 0
game.play();
// while(player1.hand.length > 0 && player2.hand.length > 0){
//   game.play();
// i++
// }
// console.log(i);
