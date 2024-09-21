let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleClick(cellIndex) {
    if (gameActive && board[cellIndex] === '') {
        board[cellIndex] = currentPlayer;
        document.querySelectorAll('.cell')[cellIndex].innerText = currentPlayer;

        if (checkWin()) {
            document.getElementById('result').innerText = `${currentPlayer} wins!`;
            gameActive = false;
            return;
        }

        if (!board.includes('')) {
            document.getElementById('result').innerText = 'It\'s a tie!';
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWin() {
    return winningConditions.some(condition => {
        return condition.every(index => {
            return board[index] === currentPlayer;
        });
    });
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('result').innerText = '';
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}
