const gameBoardContainer = document.querySelector('.gameboard-container');
let currentPlayerText = document.querySelector('.current-player');
currentPlayerText.textContent = "It's Player 1's Turn!";
const gameBoardSquares = gameBoardContainer.children;

const game = {
    active: true, 

    gameboard: [null, null, null, null, null, null, null, null, null],
    
    playerTurn: function(square) {
        if (playerOne.turn === true && playerTwo.turn === false) {
            playerOne.takeTurn(square);
            currentPlayerText.textContent = "It's Player 2's Turn!"
            game.addSymbolToGameboard();
            game.checkForWin();
        } else if (playerTwo.turn === true && playerOne.turn === false) {
            playerTwo.takeTurn(square);
            currentPlayerText.textContent = "It's Player 1's Turn!";
            game.addSymbolToGameboard();
            game.checkForWin();
        }
    },

    addSymbolToGameboard: function() {
        game.gameboard[0] = gameBoardSquares[0].innerText;
        game.gameboard[1] = gameBoardSquares[1].innerText;
        game.gameboard[2] = gameBoardSquares[2].innerText;
        game.gameboard[3] = gameBoardSquares[3].innerText;
        game.gameboard[4] = gameBoardSquares[4].innerText;
        game.gameboard[5] = gameBoardSquares[5].innerText;
        game.gameboard[6] = gameBoardSquares[6].innerText;
        game.gameboard[7] = gameBoardSquares[7].innerText;
        game.gameboard[8] = gameBoardSquares[8].innerText;
    },

    checkForWin: function(player) {
        if (game.gameboard[0] === 'x' && game.gameboard[1] === 'x' && game.gameboard[2] === 'x' ||
            game.gameboard[3] === 'x' && game.gameboard[4] === 'x' && game.gameboard[5] === 'x' ||
            game.gameboard[6] === 'x' && game.gameboard[7] === 'x' && game.gameboard[8] === 'x' ||
            game.gameboard[0] === 'x' && game.gameboard[3] === 'x' && game.gameboard[6] === 'x' ||
            game.gameboard[1] === 'x' && game.gameboard[4] === 'x' && game.gameboard[7] === 'x' ||
            game.gameboard[2] === 'x' && game.gameboard[5] === 'x' && game.gameboard[8] === 'x' ||
            game.gameboard[0] === 'x' && game.gameboard[4] === 'x' && game.gameboard[8] === 'x' ||
            game.gameboard[2] === 'x' && game.gameboard[4] === 'x' && game.gameboard[6] === 'x' 
            ) {
            currentPlayerText.textContent = 'Player 1 Wins!'
            game.active = false;
        } else if (game.gameboard[0] === 'o' && game.gameboard[1] === 'o' && game.gameboard[2] === 'o' ||
                   game.gameboard[3] === 'o' && game.gameboard[4] === 'o' && game.gameboard[5] === 'o' ||
                   game.gameboard[6] === 'o' && game.gameboard[7] === 'o' && game.gameboard[8] === 'o' ||
                   game.gameboard[0] === 'o' && game.gameboard[3] === 'o' && game.gameboard[6] === 'o' ||
                   game.gameboard[1] === 'o' && game.gameboard[4] === 'o' && game.gameboard[7] === 'o' ||
                   game.gameboard[2] === 'o' && game.gameboard[5] === 'o' && game.gameboard[8] === 'o' ||
                   game.gameboard[0] === 'o' && game.gameboard[4] === 'o' && game.gameboard[8] === 'o' ||
                   game.gameboard[2] === 'o' && game.gameboard[4] === 'o' && game.gameboard[6] === 'o'
                   ) {
                     currentPlayerText.textContent = 'Player 2 Wins!'
                     game.active = false;
                   } else if (!game.gameboard.includes('') && game.active === true) {
                    currentPlayerText.textContent = "It's A Tie!"
                   }
    }
}

const playerOne = {
    symbol: 'x',
    turn: true,
    takeTurn: function(square) {
        if (square.textContent === '' && game.active === true) {
        square.textContent = this.symbol;
        this.turn = false;
        playerTwo.turn = true;
        } else {
            return;
        }
    }
}

const playerTwo = {
    symbol: 'o',
    turn: false,
    takeTurn: function(square) {
        if (square.textContent === '' && game.active === true) {
        square.textContent = this.symbol;
        this.turn = false;
        playerOne.turn = true;
        } else {
            return;
        }
    }
}

function createGameboard() {
    const gameBoardSquare = document.createElement('div');
    gameBoardSquare.classList.add('gameboard-square');
    gameBoardContainer.appendChild(gameBoardSquare);

    gameBoardSquare.addEventListener('click', function(e){
        game.playerTurn(e.target);
    })
}

window.addEventListener('DOMContentLoaded', function() {
    game.gameboard.map(gameboard => createGameboard());
})





