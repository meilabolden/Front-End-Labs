// Week 06 Card Game coding assignment
//
// Coding Steps:
//
// For the final project you will be creating an automated version of the classic card game WAR! 
// There are many versions of the game WAR. In this version there are only 2 players.
// You do not need to do anything special when there is a tie in a round.
// Think about how you would build this project and write your plan down. 
// Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include. 
// You do not need to accept any user input, when you run your code, the entire game 
//  should play out instantly without any user input inside of your browser’s console.
//
// The completed project should, when executed, do the following:
//
// Deal 26 Cards to each Player from a Deck of 52 cards.
// Iterate through the turns where each Player plays a Card.
// The Player who played the higher card is awarded a point
// Ties result in zero points for both Players
// After all cards have been played, display the score and declare the winner.
// Write a Unit Test using Mocha and Chai for at least one of the functions you write.

/* End Coding Assignment class */

// Card anatomy: NumValue (2,3,4,5,6,7,8,9,10), Suits (heart, diamond, spade, clubs), Face 
//     - not needed(Back, Boarder, Finish, Stock)
// Deck: has 52 cards split evenly between 2 players(26 each), 
// Dealer: shuffles and deals cards


              // card Values help determine which player hand played the higher value card  





console.log('WAR!')

class Card { // Represents a single card object which includes the card face/suit/value.
    constructor(face, suit, value){        
        this.face = face;
        this.suit = suit;
        this.value = value;
    }
    showCard() { // Displays the players card for each round
        return `${this.face} of ${this.suit}`
    }
}

//Deck class holds all 52 cards that were created
class Deck {
    constructor() {
        this.cards = [];
        this.createDeck();
        this.display();        
    }

    createDeck() { //Creates a shuffled deck of cards
        this.display();
        this.shuffleDeck();
        return this.cards;
    }

    display() { // Creates a card with all face and value combination of each suit
        const Face = ["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"]; //Card Face
        const Suits = ['🧡', '🍀', '💠', '🧩']; // Card Suit
        const Values = [2,3,4,5,6,7,8,9,10,11,12,13,1] // Card point value

    
        for (let i = 0; i < Suits.length; i++){
            for(let j = 0; j < Face.length; j++){
                this.cards.push(new Card(Face[j], Suits[i], Values[j]));
            }
        }
    }

    shuffleDeck() { //randomizes the deck
        let temp = 0;
        for (let i = 0; i < this.cards.length; i++) {
            let shuffle = Math.floor(Math.random() * (51) + 1);
            temp = this.cards[i];
            this.cards[i] = this.cards[shuffle]
            this.cards[shuffle] = temp
        }    
    }
}

// Player class represents each player in the game.

class Player {
    constructor() {
        this.hand = [];
        this.points = 0;
    }

    showCard() {
        return this.hand.pop();
    }

    takeCard(cards) {
        this.hand.push(cards);
    }
    
    takeTurn() {
        console.table(this.hand);
    }
}

// Game class represents the game elements
class Game {
    constructor(player1, player2) {
        this.deck = new Deck();
        this.player1 = new Player(player1);
        this.player2 = new Player(player2);
        this.dealCards();
        this.currentTurn = 0;
    }

    dealCards() {
        for (let i = 0; i < 26; i++) {
            this.player1.takeCard(this.deck.cards.pop());
            this.player2.takeCard(this.deck.cards.pop());
        }
    }

    playerTurn() {
        let player1Turn;
        let player2Turn;

        for (let i = 0; i < 26; i++) {
            player1Turn = this.player1.showCard();
            player2Turn = this.player2.showCard();
            this.roundWinner(player1Turn, player2Turn);
        }
    }

    roundWinner(player1Turn, player2Turn){
        if (player1Turn.value > player2Turn.value) {
            this.player1.points += 1;
            console.log(`Player1 hand: ${player1Turn.showCard()}\nPlayer2 hand: ${player2Turn.showCard()}`);
            console.log("Player1 receives 1 point.");
        }
        if (player1Turn.value < player2Turn.value) {
            this.player2.points += 1;
            console.log(`Player1 hand: ${player1Turn.showCard()}\nPlayer2 hand: ${player2Turn.showCard()}`);
            console.log("Player 2 receives 1 point.");
        }
        if (player1Turn.value == player2Turn.value); {
            console.log(`Player1 hand: ${player1Turn.showCard()}\nPlayer2 hand: ${player2Turn.showCard()}`);
            console.log("Tie round, no points awarded.");
        }
    }

    getValue(){
        //NumValue (2,3,4,5,6,7,8,9,10)
        return `Player 1 has ${this.player1.points} points | Player 2 has ${this.player2.points} points`;
    }

    ultimateWinner(){
        if (this.player1.points > this.player2.points) {
            console.log('Player 1 WINS!')
        }
        if (this.player1.points < this.player2.points) {
            console.log('Player 2 WINS!')
        }
        if (this.player1.points == this.player2.points) {
            console.log('TIE GAME!')
        }
    }
}

let cardGame = new Game();
cardGame.deck.shuffleDeck();
cardGame.dealCards();
cardGame.playerTurn();
console.log(cardGame.getValue());
console.log(cardGame.ultimateWinner());