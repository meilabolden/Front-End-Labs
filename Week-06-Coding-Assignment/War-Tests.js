// Code Testing with Mocha & Chai for the card game War

const expect = chai.expect
const assert = chai.assert

// Unit Tests & TDD w/ Mocha & Chai.

describe('Test 1: Player Class', () => {
    //insert code to be run below
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
    let player1 = new Player()
    describe('Player class', () => {
        it('#Should assign points to each player if applicable after each round.', () => {
            expect(player1.points).to.equal(0)
            player1.points += 1
            expect(player1.points).to.equal(1)
            player1.points -= 1
            expect(player1.points).to.equal(0)
        })
    });
})




