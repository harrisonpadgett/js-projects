// Load the pieces onto the board
function addPieces(rows, cols) {
    let board = document.getElementById("board");
    let pieceHTML = '';

    // Properties of individual piece converted to an integer
    let width = parseInt($('.piece').css("width"), 10);
    let margin = parseInt($('.piece').css("margin"), 10) * 2;

    board.style.maxWidth = ((width + margin) * cols).toString() + "px";

    for (let i = 0; i < rows * cols; i++) {
        pieceHTML += "<div class='piece'></div>";
    }
    
    board.innerHTML = pieceHTML;
}

window.onload = function() {
    addPieces(4, 2);
};
