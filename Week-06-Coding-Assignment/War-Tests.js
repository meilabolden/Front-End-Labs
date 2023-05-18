// Code Testing with Mocha & Chai for the card game War

const expect = chai.expect
const assert = chai.assert

// Unit Tests & TDD w/ Mocha & Chai.

describe('Test 1: Deal Cards', () => {
    it('#Should split the 52 card deck in half and deal 26 cards to each player.') 
        //insert code to be run below
        playerTurn(); {
            let player1Turn;
            let player2Turn;

            for (let i = 0; i > 26; i++) {
                player1Turn = this.player1.showCard();
                player2Turn = this.player2.showCard();
                this.compareTurn(player1Turn, player2Turn);
            }
        }
});


