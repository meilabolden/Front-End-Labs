(function($, undefined) {
    'use strict'

    $(document).ready(function(){
        const $game = $('#game');

        $game.on('click', '.cell', (e) => {
            console.log(e.target);
        })
    });
})(jQuery);






// const PLAYER_X = 'X';
// const PLAYER_O = 'O';
// const winningCombo = [
//     [0, 1, 2],
// 	[3, 4, 5],
// 	[6, 7, 8],
// 	[0, 3, 6],
// 	[1, 4, 7],
// 	[2, 5, 8],
// 	[0, 4, 8],
// 	[2, 4, 6]
// ]

// const cellElements = document.querySelector('cell');
// const boardElement = document.getElementById('board');
// const winnerElement = document.getElementById('winner');
// const resetButton = document.getElementById('resetButton');
// const winnerText = document.getElementById('winnerText');
// let PLAYER_O_Turn = false;

// newGame ();

// resetButton.addEventListener('click', newGame);

// function newGame(){
//     PLAYER_O_Turn = false;
//     cellElements.forEach(cell => {
//         cell.classlist.remove(PLAYER_O);
//         cell.classlist.remove(PLAYER_X);
//         cell.removeEventListener('click', handleCellClick)
//         cell.addEventListener('click', handleCellClick, {once: true})
//     })
//     setBoardHoverClass()
//     winnerElement.classList.remove('show')
// }

// function handleCellClick(e){
//     const cell = e.target;
//     const currentClass = PLAYER_O_Turn ? PLAYER_O_CLASS : PLAYER_X_CLASS;
    
// }