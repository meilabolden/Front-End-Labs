const cards = Array.from(document.getElementsByClassName('card'));
const turnStatement = document.getElementById('turnStatement');
const resetButton = document.querySelector('ResetBtn');
const roundWinner = document.getElementById('roundWinner');
const lines = document.getElementsByClassName('line');


let currentPlayer = 'X'; //Sets first move to player X
let moves = 0; //Board starts with 0 moves
let gameEnded = false; //determins that the game is still in progress


const winningCombos = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
] //winning combinations of cards[index] on the gameboard (diaganol, across, down)


function makeMove(index) {
    if(!gameEnded && !cards[index].textContent) {
        cards[index].textContent = currentPlayer;
        moves++;

        if(checkScore(currentPlayer)) {
            endGame(currentPlayer + ' wins this round!');
            const winningCombo = getWinningCombo(currentPlayer);
            drawWinningLine(winningCombo);
        } else if (moves === 9) {
            endGame('It is a DRAW!');
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            turnStatement.textContent = 'Player '  + currentPlayer + ' makes the next move.';
        }      
    } 
} // adds player icon to the gameboard, switches between X and O, switches player turn statement for each move 
    
function checkScore(player) {
    return winningCombos.some(combination => {
        return combination.every(index => cards[index].textContent === player);
    });
} //checks the score of player combinations.
    
function getWinningCombo(player) {
    return winningCombos.find(combination => {
        return combination.every(index => cards[index].textContent === player);
    });
} //uses winningCombos array to determine a winning player
    
function drawWinningLine(combination) {
    const line = document.createElement('div');
    line.classList.add('line');
    line.style.setProperty('--start-card', combination[0]);
    line.style.setProperty('--end-card', combination[2]);
    document.getElementById('gameBoard').appendChild(line);
}
    
function endGame(message) {
    gameEnded = true;
    roundWinner.textContent = message;
    roundWinner.classList.remove('hide');
} //function to determine when the game has ended
    
function resetGame() {
    cards.forEach(card => {
        card.textContent = '';
    });
    
    currentPlayer = 'X';
    moves = 0;
    gameEnded = false;
    turnStatement.textContent = 'Player X makes the first move';
    roundWinner.textContent = '';
    roundWinner.classList.add('hide');
    removeWinningLine();
} //function to reset the gameboard for a new game to begin.
    
function removeWinningLine() {
    const line = document.getElementsByClassName('line')[0];
    if (line) {
    line.parentNode.removeChild(line);
    }
}
    
resetButton.addEventListener('click', resetGame()); //calls the resetGame() function to clear the gameboard        