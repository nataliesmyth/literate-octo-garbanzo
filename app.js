// console.log('testing....')

/****** CONSTANTS ******/

/****** APP STATE (variables) ******/

let board;

let turn = 'X'

let win;

/****** CACHED ELEMENT REFERENCES ******/

// grab squares
const squares = Array.from(document.querySelectorAll('#board div'));
// the array.from() function makes an array from all elements returned by querySelectorAll. querySelectorAll finds the elements with the id of .boardand selects all the div children of that element. This way, we didn't have to give each square an id, select them individually and build a new array.

const messages = document.querySelector('h2');

/****** EVENT LISTENERS ******/

document.getElementById('board').addEventListener('click', handleTurn);

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
    console.log(turn);
    console.log(win)
    render();
    win = board[0] && board[0] === board[1] && board[0] === board[2] ? board[0] : null ;
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
    messages.textContent = `It's ${turn}'s turn!`;
};

