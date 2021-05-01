// console.log('testing....')

/****** CONSTANTS ******/

/****** APP STATE (variables) ******/

    // in order to make a mark, we need a place for the mark to be made
    // makiing a mark means the game is initiated
let board;

let turn = 'X'

/****** CACHED ELEMENT REFERENCES ******/

    // grab squares
const squares = Array.from(document.querySelectorAll('#board div'));
    // the array.from() function makes an array from all elements returned by querySelectorAll. querySelectorAll finds the elements with the id of .boardand selects all the div children of that element. This way, we didn't have to give each square an id, select them individually and build a new array.

/****** EVENT LISTENERS ******/

document.getElementById('board').addEventListener('click', handleTurn);

/****** FUNCTION ******/

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
        console.log(mark, index);
        // set text content of square of the same position to the mark on the board
        squares[index].textContent = mark;
    });
};

