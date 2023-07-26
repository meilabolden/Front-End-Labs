console.log('WAR!')

class Card {
    constructor(face, suit, value){        
        this.face = face;
        this.suit = suit;
        this.value = value;
    }
}

// let card = new Card('10', 'hearts', 10)
// console.log(card)

class Deck {
    constructor(players) {
        this.cards = [];
        this.players = players;
        
    }

    createDeck() {
        const Face = ["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"]; //Card Face
        const Suits = ['🧡', '🍀', '💠', '🧩']; // Card Suit
        const Values = [2,3,4,5,6,7,8,9,10,11,12,13,1]

    
        for (let i = 0; i < Suits.length; i++){
            for(let j = 0; j < Face.length; j++){
                this.cards.push(new Card(Face[j], Suits[i], Values[j]));
            }
        }
    }

    shuffleDeck() {
        let temp = 0;
        for (let i = 0; i < this.cards.length; i++) {
            let shuffle = Math.floor(Math.random() * (51) + 1);
            temp = this.cards[i];
            this.cards[i] = this.cards[shuffle]
            this.cards[shuffle] = temp
        }    
    }
}

// let deck = new Deck();
// deck.createDeck();
// console.log(deck.cards);


class Player {
    constructor(player1, player2, playerCards) {
        // this.playerName = name;
        player1;
        player2;
        playerCards = [];
    }
}

class Game {
    constructor() {
        this.cards = [];
        this.players = [];
    }

    startGame(player1, player2) {
        this.players.push(new Player(player1));
        this.players.push(new Player(player2));
        let deck = new Deck();
        deck.createDeck();
        deck.shuffleDeck();
        this.playerTurn();
        this.playerCards;
        // this.players[0].playerCards = deck.cards.slice(0,26);
        // this.players[1].playerCards = deck.cards.slice(26,52);
        // playerCards.this.player1 = deck.cards.slice(0,26);
        // playerCards.this.player2 = deck.cards.slice(26,52);
        console.log(`${player1}: ${this.playerCards = deck.cards.slice(0,26)}
                    \n${player2}: ${this.playerCards = deck.cards.slice(26,52)}`)
    }


    dealCards () {
        for (let i = 0; i < 26; i++){
            this.player1.takeCard(this.deck.cards.pop());
            this.player2.takeCard(this.deck.cards.pop());
        }
    }

    playerTurn() {
        let player1Turn;
        let player2Turn;

        for (let i = 0; i > 26; i++) {
            player1Turn = this.player1.showCard();
            player2Turn = this.player2.showCard();
            this.roundWinner(player1Turn, player2Turn);
        }
    }

    roundWinner(player1Turn, player2Turn){
        if (player1Turn > player2Turn) {
            this.player1.points += 1;
            console.log(`Player1 hand: ${player1Turn.showCard()}\n Player2 hand: ${player2Turn.showCard()}`);
            console.log("Player 1 receives 1 point.");
        } if (player1Turn.value < player2Turn.value) {
            this.player2.points += 1;
            console.log(`Player1 hand: ${player1Turn.showCard()}\n Player2 hand: ${player2Turn.showCard()}`);
            console.log("Player 2 receives 1 point.");
        } else (player1Turn.value == player2Turn.value); {
            console.log(`Player1 hand: ${player1Turn.showCard()}\n Player2 hand: ${player2Turn.showCard()}`);
            console.log("Tie round, no winner.");
        }
        return roundWinner();
    }

    getValue(){
        //NumValue (2,3,4,5,6,7,8,9,10)
        return `${this.player1.points} vs. ${this.player2.points}`;
    }

    ultimateWinner(){
        if (this.player1.points > this.player2.points) {
            console.log('Player 1 WINS!')
        }
        if (this.player1.points < this.player2.points) {
            console.log('Player 2 WINS!')
        }
        else if (this.player1.points === this.player2.points) {
            console.log('TIE GAME!')
        }
    }
}

let cardGame = new Game();
cardGame.startGame('Player 1 ', 'Player 2 ');
console.log(cardGame.players);
console.log(this.roundWinner);