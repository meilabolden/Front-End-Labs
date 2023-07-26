// Code Testing with Mocha & Chai for the card game War

const expect = chai.expect
const assert = chai.assert

// Unit Tests & TDD w/ Mocha & Chai.

describe('Test 1: Deal Cards', () => {
    describe('Start Game: Deal cards', () => {
        it('#Should split the 52 card deck in half and deal 26 cards to each player.', 
        //insert code to be run below
        function() {
        startGame(player1, player2) 
            this.players.push(new Player(player1));
            this.players.push(new Player(player2));
            let deck = new Deck();
            deck.createDeck();
            deck.shuffleDeck();
            this.players[0].playerCards = deck.cards.slice(0,26);
            this.players[1].playerCards = deck.cards.slice(26,52);
        
        console.log(`
        Player1: ${player1.deckOfCards}
        Player2: ${player2.deckOfCards}
        `);
    });
    })
});



