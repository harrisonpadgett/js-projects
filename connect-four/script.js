/* 
Number of rows/ columns depend on the intiial call to addPieces

0 -> Position is empty
1 -> Player 1 (Red) position
2 -> Player 2 (Yellow) position
*/
var board = [];

/*
1 -> Player 1 (Red) turn
2 -> Player 2 (Yellow) turn
*/
var turn = Math.floor(Math.random() * 2) + 1;

// Initialize the pieces into the board variable
function addPieces(rows, cols) {
    for (let r = 0; r < rows; r++)
    {
        board[r] = [];
        for(let c = 0; c < cols; c++)
        {
            board[r][c] = 0;
            console.log(board[r][c]);
        }
    }
    console.log(board);
}

// Update the HTML to display the current status of the board
function displayBoard() {
    let boardHTML = document.getElementById("board");
    let pieceHTML = '';

    // Properties of individual piece converted to an integer
    let width = parseInt($('.piece').css("width"), 10);
    let margin = (parseInt($('.piece').css("margin"), 10)) * 2;

    boardHTML.style.maxWidth = ((width + margin) * board[0].length).toString() + "px";

    for (let r = 0; r < board.length; r++)
    {
        for (let c = 0; c < board[r].length; c++)
        {
            if (board[r][c] === 0)
            {
                pieceHTML += "<div class='piece' onclick='takeTurn(" + c + ")'></div>";
                console.log("Adding: <div class='piece' onclick='takeTurn(" + c + ")'></div> at ("+r+","+c+")");
            }
            else if (board[r][c] === 1)
            {
                pieceHTML += "<div class='red-piece'></div>"
            }
            else
            {
                pieceHTML += "<div class='yellow-piece'></div>"
            }
        }
    }

    boardHTML.innerHTML = pieceHTML;
}

// Runs whenever a piece is clicked
function takeTurn(col) {
    console.log(col);

    for (let r = board.length - 1; r >= 0; r--)
    {
        for(let c = 0; c < board[r].length; c++)
        {
            if (board[r][c] === 0 && c === col && check() === undefined)
            {
                console.log("Position works: ("+r+","+c+")");
                board[r][c] = turn;
                displayBoard();
                
                if (check() === true)
                {
                    alert("Player " + turn + " wins!");
                    return;
                }


                if (turn === 1)
                {
                    turn = 2;
                }
                else
                {
                    turn = 1;
                }
                return;
            }
        }
    }

}

// Check's if the current state of the board has a winner
function check() {
    for (let r = 0; r < board.length; r++)
    {
        for (let c = 0; c < board[r].length; c++)
        {
            if (board[r][c] ===  turn)
            {
                let check = 0;
                
                // Check below position
                for(let q = r; q < r + 4; q++)
                {
                    if(q >= 0 && c >= 0 && q < board.length && c < board[r].length && board[q][c] === turn)
                    {
                        check++;
                    }
                }

                if(check >= 4)
                {
                    console.log("Player " + turn + " wins!");
                    return true;
                }
                else
                {
                    check = 0;
                }

                // Check to left of position
                for(let q = c; q > c - 4; q--)
                {
                    if(r >= 0 && q >= 0 && r < board.length && c < board[r].length && board[r][q] === turn)
                    {
                        check++;
                    }
                }

                if(check >= 4)
                {
                    console.log("Player " + turn + " wins!");
                    return true;
                }
                else
                {
                    check = 0;
                }
				
                // Check to right of position
                for(let q = c; q < c + 4; q++)
                {
                    if(r >= 0 && q >= 0 && r < board.length && q < board[r].length && board[r][q] === turn)
                    {
                        check++;
                    }
                }

                if(check >= 4)
                {
                    console.log("Player " + turn + " wins!");
                    return true;
                }
                else
                {
                    check = 0;
                }

                // Check the right diagonal of the position
                for(let f = r; f < r + 4; f++)
                {
                    let q = c - (r - f);

                    if(f >= 0 && q >= 0 && f < board.length && q < board[f].length && board[f][q]  === turn)
                    {
                        check++;
                    }
                }
                if(check >= 4)
                {
                    console.log("Player " + turn + " wins!");
                    return true;
                }
                else
                {
                    check = 0;
                }

                // Check the left diagonal of the position
                for(let f = r; f < r + 4; f++)
                {
                    let q = c + (r - f);

                    if(f >= 0 && q >= 0 && f < board.length && c < board[f].length && board[f][q] === turn)
                    {
                        check++;
                    }
                }
                if(check >= 4)
                {
                    console.log("Player " + turn + " wins!");
                    return true;
                }
                else
                {
                    check = 0;
                }


            }
        }
    }


}

addPieces(6, 7);
displayBoard();


