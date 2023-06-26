// TEST!!!!
// TEST!!!!
// TEST!!!!
// TEST!!!!

const gameBoard = document.querySelector('#gameBoard')
const infoDisplay = document.querySelector('#info')
const playCell = [
    " "," "," "," "," "," "," "," "," "
]

let first = 'cross'
infoDisplay.textContent = 'X makes the first move.'

function createBoard(){
    playCell.forEach((_cell, index) => {
        const cellElement = document.createElement("div");
        cellElement.classList.add("square");
        cellElement.id = index;
        cellElement.addEventListener('click', addIcon);
        gameBoard.append(cellElement);
    })
}
createBoard();

function addIcon(event) {
    const iconDisplay = document.createElement('div');
    iconDisplay.classList.add(first);
    event.target.append(iconDisplay);
    first = first === 'cross' ? 'circle' : 'cross';
    infoDisplay.textContent = `${first} makes the next move`;
    event.target.removeEventListener('click', iconDisplay);
    checkScore()
}

function checkScore(){
    const winningCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]
}

winningCombos.forEach(array => {
    const crossWins = array.every(cell => 
        allSquares[cell].firstChild?.classList.contains('cross'))
        if(crossWins) {
            infoDisplay.textContent = 'Cross Wins!'
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
        }
        return
})

winningCombos.forEach(array => {
    const circleWins = array.every(cell => 
        allSquares[cell].firstChild?.classList.contains('circle'))
        if(circleWins) {
            infoDisplay.textContent = 'Circle Wins!'
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
        }
        return
})

// let card2 = document.getElementById('2');
// let card1 = document.getElementById('1');
// let card3 = document.getElementById('3');
// let card4 = document.getElementById('4');
// let card5 = document.getElementById('5');
// let card6 = document.getElementById('6');
// let card7 = document.getElementById('7');
// let card8 = document.getElementById('8');
// let card9 = document.getElementById('9');

// let playerX = 'X';
// let playerO = 'O';






