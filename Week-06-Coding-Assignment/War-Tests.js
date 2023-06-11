// Code Testing with Mocha & Chai for the card game War

const expect = chai.expect
const assert = chai.assert

// Unit Tests & TDD w/ Mocha & Chai.

describe('Test 1: Deal Cards', () => {
    it('#Should split the 52 card deck in half and deal 26 cards to each player.') 
        //insert code to be run below
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
            
        
    
        
        
});


