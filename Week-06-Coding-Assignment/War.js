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



// Player class represents each player in the game.

// class Player{
//     constructor(name) {
//         this.name = name;
//         this.hand = [];
//         this.points = 0;
//     }

//     takeCard(){
//         this.hand.push(this.cards);
//     }
//     showCard() {
//         return this.hand.pop();
//     }

//     takeTurn(){
//         console.table(this.hand);
//     }
// }        

//  // // Card class represents all cards in the deck.
        
// class Card {
//     constructor(face, suits, value){
//         this.face = face;
//         this.suits = suits;
//         this.value = value;

//         this.face = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
//         this.suits = ['🧡', '🍀', '💠', '🧩'];
//     }   

//     getValue(){
//         //NumValue (2,3,4,5,6,7,8,9,10)

//     }
// }

// class Deck{
//     constructor(cards, dealCards, createDeck){
//         this.cards = cards;
//         this.dealCards = dealCards;
//         this.createDeck = createDeck;
//     }
// }
//     let deck = new Deck();


// // Game class represents the card game.

// class Game{
//     constructor(turn, winner,player1, player2, cards){
//         this.turn = turn;
//         this.winner = winner; 
//         this.player1 = player1;
//         this.player2 = player2; 
//     }

//     // //Deck class represents all 52 cards.
            
    
//             createDeck(){
//                 let newDeck = [];
                            
//                 for (let f of face) {
//                     for (let s of suits) {
//                         let card = new Card(f,s);
//                         newDeck.push(card);
//                     }
//                 }
//                 return newDeck;
//             }

//             shuffleDeck() {
//                 for (let i = 0; i < this.deck.length; i++) {
//                     let shuffle = Math.floor(Math.random() * (this.deck.length));
//                     let temp = this.deck[i]
//                 }
//             }
            
//             dealCards () {
//                 for (let i = 0; i < 26; i++){
//                     this.player1.takeCard(this.deck.this.cards.pop());
//                     this.player2.takeCard(this.deck.this.cards.pop());
//                 }
//             }

//             playerTurn() {
//                 let player1Turn;
//                 let player2Turn;

//                 for (let i = 0; i > 26; i++) {
//                     player1Turn = this.player1.showCard();
//                     player2Turn = this.player2.showCard();
//                     this.compareTurn(player1Turn, player2Turn);
//                 }
//             }

// }

// let game = new Game();
    

/************************************************************/

// Live class practice
/**
 * 4 suits
 * 13 cards / suit 2 - A
 * 52 unique cards
 */



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
}               // card Values help determine which hand played the higher value card

class Card {
    constructor(face, suit, value){
        this.face = face;
        this.suit = suit;
        this.value = value;
    }
}

function newDeck (){
    return Face.flatMap(face => {
        return Suits.flatMap(suit => {
            return new Card(face, suit)
        })
    })
}

class Deck {
    constructor(cards = newDeck(), player1, player2, turn, winner){
        this.cards = cards;
        this.player1 = player1;
        this.player2 = player2;
        this.turn = turn;
        this.winner = winner;
    }

    get deckOfCards(){
        return this.cards.length;
    }

    shuffleCards() {
        for (let i = this.deckOfCards - 1; i > 0; i--) {
            const shuffledDeck = Math.floor(Math.random() * (i + 1));
            let oldDeck = this.cards[shuffledDeck]
            this.cards[shuffledDeck] = this.cards[i]
            this.cards[i] = oldDeck
        }
    }


    roundWinner(player1Deck, player2Deck){
        if (player1Deck.value > player2Deck.value) {
            this.player1Deck.points += 1;
            console.log("Player 1 wins this round!");
            console.log("Player 1 receives 1 point.");
        } if (player2Deck > player1Deck) {
            this.player2Deck.points += 1;
            console.log("Player 2 wins this round!");
            console.log("Player 2 receives 1 point.");
        } else if (player1Deck === player2Deck) {
            this.player1Deck.points += 0;
            this.player2Deck.points += 0;
            console.log("Tie round, no winner.");
        }
        return this.winner;
    }
}



playGame()
function playGame() {
    const deck = new Deck();
    deck.shuffleCards();
    
    const dealCards = Math.ceil(deck.deckOfCards / 2);
    player1Deck = new Deck(deck.cards.slice(0, dealCards));
    player2Deck = new Deck(deck.cards.slice(dealCards, deck.deckOfCards));

    console.log(`
    Player1: ${player1Deck.deckOfCards}
    Player2: ${player2Deck.deckOfCards}
    `);
    
   
}











