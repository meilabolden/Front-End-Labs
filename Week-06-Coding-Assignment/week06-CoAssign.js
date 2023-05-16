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


// Card anatomy: NumValue (2,3,4,5,6,7,8,9,10), Suits (heart, diamond, spade, clubs), Face 
//     - not needed(Back, Boarder, Finish, Stock)
// Deck: has 52 cards split evenly between 2 players(26 each), 
// Dealer: shuffles and deals cards



// Player class represents each player in the game.

class Player{
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.points = 0;
    }

    takeCard(){
        this.hand.push(this.cards);
    }
    showCard() {
        return this.hand.pop();
    }

    takeTurn(){
        console.table(this.hand);
    }
}        

 // // Card class represents all cards in the deck.
        
class Card {
    constructor(face, suits, value){
        this.face = face;
        this.suits = suits;
        this.value = value;

        this.face = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
        this.suits = ['🧡', '🍀', '💠', '🧩'];
    }   

    getValue(){
        //NumValue (2,3,4,5,6,7,8,9,10)

    }
}


// Game class represents the card game.

class Game{
    constructor(turn, winner){
        this.turn = turn;
        this.winner = winner;
        this.cards = []; 
        this.player1 = player1;
        this.player2 = player2;
        this.deck = new Deck();
        this.dealCards();
        this.createDeck(); 
    }

    // //Deck class represents all 52 cards.
            
    
            createDeck(){
                let newDeck = [];
                            
                for (let f of face) {
                    for (let s of suits) {
                        let card = new Card(f,s);
                        newDeck.push(card);
                    }
                }
                return newDeck;
            }

            shuffleDeck() {
                for (let i = 0; i < this.deck.length; i++) {
                    let shuffle = Math.floor(Math.random() * (this.deck.length));
                    let temp = this.deck[i]
                }
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
                    this.compareTurn(player1Turn, player2Turn);
                }
            }

}

let game = new Game()
    

/************************************************************/

// Live class practice
/**
 * 4 suits
 * 13 cards / suit 2 - A
 * 52 unique cards
 */

// Deck of cards
// Shuffle and deal actions // iterate
// scores for each player, # of cards
// Create players - the could have scores

// let front = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
// let suits = ['of hearts', 'of diamonds', 'of clubs', 'of spades']

// for (let f of front) {
//     for (let s of suits) {
//         let card = new Card(f,s);
//     }
// }
