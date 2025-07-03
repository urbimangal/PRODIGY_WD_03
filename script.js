let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

function clickCell(index) {
  if (gameBoard[index] === "" && gameActive) {
    gameBoard[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].innerText = currentPlayer;
    
    if (checkWin()) {
      document.getElementById("message").innerText = "🎉 Player " + currentPlayer + " wins!";
      gameActive = false;
    } else if (gameBoard.every(cell => cell !== "")) {
      document.getElementById("message").innerText = "🤝 It's a draw!";
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      document.getElementById("message").innerText = "Player " + currentPlayer + "'s turn";
    }
  }
}

function checkWin() {
  const wins = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  return wins.some(pattern => {
    return gameBoard[pattern[0]] === currentPlayer &&
           gameBoard[pattern[1]] === currentPlayer &&
           gameBoard[pattern[2]] === currentPlayer;
  });
}

function resetGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  currentPlayer = "X";
  let cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
  }
  document.getElementById("message").innerText = "Player X's turn";
}
