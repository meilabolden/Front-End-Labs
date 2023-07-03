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




// Player class represents each player in the game.

class Player{
    constructor(name = '') {
        this.name = name;
        this.hand = [];
        this.points = 0;
    }

    takeCard(cards){
        this.hand.push(this.cards);
    }
    showCard() {
        return this.hand.pop();
    }

    takeTurn(){
        console.table(this.hand);
    }
}  

class Card {
    constructor(suit, face, value){        
        this.suit = suit;
        this.face = face;
        this.value = value;
    }
}


class Deck{
    constructor(){
        this.cards = [];
        this.displayDeck();
        this.createDeck();
    }

    startGame(player1, player2) {
        this.players.push(new Player(player1));
        this.players.push(new Player(player2));
        let deck = new Deck();
        deck.createDeck();
        deck.shuffleDeck();
        this.players[0].playerCards = deck.cards.slice(0,26);
        this.players[1].playerCards = deck.cards.slice(26,52);
    }

    createDeck() {
        this.displayDeck();
        this.shuffle();
        return this.cards 
    }
    
    // Card class represents all cards in the deck.
            
    displayDeck() {
    
        const Face = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"]; //Card Face
        const Suits = ['🧡', '🍀', '💠', '🧩']; // Card Suit
        const Values = {
            "2" : 2,
            "3" : 3,
            "4" : 4,
            "5" : 5,
            "6" : 6,
            "7" : 7,
            "8" : 8,
            "9" : 9, 
            "10" : 10,
            "J" : 11,
            "Q" : 12,
            "K" : 13,
            "A" : 14,
        }
    
        for (let i = 0; i < Suits.length; i++){
            for(let j = 0; j < Face.length; j++){
                this.cards.push(new Card(Face[j], Suits[i], Values[j]))
            }
        }
    
    } 

    shuffle() {
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

    // Game class represents the card game.


class Game {
    constructor(playerName1, playerName2){
        this.deck = new Deck();
        this.player1 = new Player(playerName1);
        this.player2 = new Player(playerName2); 
        this.dealCards();
        this.playerTurn = 1; 
    }

 // Deck class represents all 52 cards.
            
               
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
            console.log(`Player1 hand: ${player1.showCard()}\n Player2 hand: ${player2.showCard()}`);
            console.log("Player 1 receives 1 point.");
        } if (player1Turn.value < player2Turn.value) {
            this.player2.points += 1;
            console.log(`Player1 hand: ${player1.showCard()}\n Player2 hand: ${player2.showCard()}`);
            console.log("Player 2 receives 1 point.");
        } if (player1Turn.value == player2Turn.value) {
            console.log(`Player1 hand: ${player1.showCard()}\n Player2 hand: ${player2.showCard()}`);
            console.log("Tie round, no winner.");
        }
        
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

let game = new Game();
game.deck.shuffle();
game.dealCards();
// console.log(playerTurn());
console.log(game.getValue());
console.log(game.ultimateWinner())


    
 
    

/************************************************************/













