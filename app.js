// console.log('testing....')

// Constants

// App State (variables)
    // in order to make a mark, we need a place for the mark to be made
    // makiing a mark means the game is initiated
let board;

// Cached Element References

// Event Listeners

// Functions
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
    });
};

