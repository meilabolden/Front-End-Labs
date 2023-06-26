(function($, undefined) {
    'use strict'

    $(document).ready(function(){
        const $board = $('#board');

        const playerX = '<i class="bi bi-x-lg"></i>';
        const playerO = '<i class="bi bi-circle"></i>';
        const gameEnded = false;
        const infoDisplay = document.querySelector('#info')

        infoDisplay.textContent = 'X makes the first move.'

        $board.on('click', '.card', (e) => {
            console.log(e.target);
            const $card = $(e.target).closest('.card');


            const player = $card.data('player') || 'X';
            $card.empty();
            if (player === 'X') {
                $card.append(playerX);
                $card.data('player', 'O');
            } else {
                $card.append(playerO);
                $card.data('player', 'X')
            }

            function addIcon(e) {
                const iconDisplay = document.createElement('div');
                iconDisplay.classList.add(playerX);
                e.target.append(iconDisplay);
                if(cardElement = playerX)
                infoDisplay.textContent = `${playerX} makes the next move`;
                e.target.removeEventListener('click', iconDisplay);
                checkScore()
            }

        })

        function checkScore(){
            const winningCombos = [
                [0,1,2], [3,4,5], [6,7,8],
                [0,3,6], [1,4,7], [2,5,8],
                [0,4,8], [2,4,6]
            ]
        
            winningCombos.forEach(array => {
                const crossWins = array.every(card => 
                    allCards[cell].firstChild?.classList.contains('cross'))
                    if(crossWins) {
                        infoDisplay.textContent = 'Cross Wins!'
                        allCards.forEach(card => card.replaceWith(card.cloneNode(true)))
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
        }
    })
})(jQuery);









// const playerX = '<i class="bi bi-x-lg"></i>';
// const playerO = '<i class="bi bi-circle"></i>';
// const player = playerX || playerO;

// const gameEnded = false;

// for (let i = 0; i <= 8; i++) {
//     document.getElementById(i.toString()).addEventListener('click', function() {
//         if (this.innerHTML === '' && !gameEnded) {
//             this.innerHTML = player
//         }
//     })
// }





// const gameBoard = document.querySelector('#gameBoard')
// 
// const playCard = [
//     "0","1","2","3","4","5","6","7","8"
// ]

// let card0 = document.getElementById('0');
// let card1 = document.getElementById('1');
// let card2 = document.getElementById('2');
// let card3 = document.getElementById('3');
// let card4 = document.getElementById('4');
// let card5 = document.getElementById('5');
// let card6 = document.getElementById('6');
// let card7 = document.getElementById('7');
// let card8 = document.getElementById('8');


// let playerX = 'X';
// let playerO = 'O';


// function playCard() {
//     cardElement = document.getElementById('id')
//     cardElement.addEventListener('click', addIcon)
//     gameBoard.append(cardElement)
// }


