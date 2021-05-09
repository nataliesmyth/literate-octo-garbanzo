// console.log('testing....')

/****** CONSTANTS ******/

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

/****** APP STATE (variables) ******/

let board;

let turn = 'X'

let win;

/****** CACHED ELEMENT REFERENCES ******/

// grab squares
const squares = Array.from(document.querySelectorAll('#board div'));
// the array.from() function makes an array from all elements returned by querySelectorAll. querySelectorAll finds the elements with the id of .boardand selects all the div children of that element. This way, we didn't have to give each square an id, select them individually and build a new array.


/****** EVENT LISTENERS ******/

document.getElementById('board').addEventListener('click', handleTurn);
const messages = document.querySelector('h2');
document.getElementById('reset-button').addEventListener('click', init);

/****** FUNCTIONS ******/

function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    board[idx] = turn;
    // console.log(board);
    // ternary statement for X or O
    // logic: if it is X's turn, assign the turn to O; if it's not X's turn, assign the turn to X
    // <condition> ? <if condition is true, this> : <else if condition is false, this>
    turn = turn === 'X' ? '0' : 'X';
    // console.log(turn);
    // console.log(win)
    win = getWinner();
    console.log(win);
    render();
    // win = board[0] && board[0] === board[1] && board[0] === board[2] ? board[0] : null ;
};

function init() {
    board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
    render();
};

init();

// making a mark renders a change in the game
function render() {
    board.forEach(function(mark, index){
        // console.log(mark, index);
        // set text content of square of the same position to the mark on the board
        squares[index].textContent = mark;
    });
    if ( win === 'T' ) {
        messages.textContent = `That's a tie, queen!`
      } else if (win) { 
        messages.textContent = `${win} wins the game!`
      } else {
        messages.textContent = `It's ${turn}'s turn!`
      }
    // messages.textContent = win === 'T' ? `That's a tie, queen!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
};

function getWinner() {
    let winner = null;
    
    winningCombos.forEach((combo, index) => {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
            winner = board[combo[0]];
        } 
    });
    
    return winner ? winner : board.includes('') ? null : 'T';
    
};


console.log(getWinner);