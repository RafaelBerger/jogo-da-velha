// #region handle the screen

const btnO = document.querySelector("#o").addEventListener("click", () => {
  playerTurn = "O";
  board.style.display = "grid";
  choosePlayer.style.display = "none";
});
const btnX = document.querySelector("#x").addEventListener("click", () => {
  playerTurn = "X";
  board.style.display = "grid";
  choosePlayer.style.display = "none";
});
const btnPlayAgain = document.querySelector("#play-again");

btnPlayAgain.addEventListener("click", () => {
  window.location.reload();
});

const board = document.querySelector("#area-jogo");
const choosePlayer = document.querySelector("#escolha-jogador");
const winnerScreen = document.querySelector("#vencedor");
//#endregion

// #region Variáveis
let xClass = "x-class";
let oClass = "o-class";

const squares = document.querySelectorAll("#squares");
let winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let playerTurn;

//#endregion

squares.forEach((square) => {
  square.addEventListener("click", handleClick, { once: true });
});

function handleClick(e) {
  const element = e.target;
  const currentClass = playerTurn == "O" ? oClass : xClass;

  addClassToElement(element, currentClass);

  if (winnerScreen.innerText == "") {
    if (playerTurn == "O") {
      e.target.innerText = "O";
    } else if (playerTurn == "X") {
      e.target.innerText = "X";
    }
  }

  if (checkWin(currentClass)) {
    endGame(false);
  } else if (checkDraw()) {
    endGame(true);
  } else {
    swapTurn();
  }
}

function checkWin(currentClass) {
  return winningCombination.some((combinations) => {
    return combinations.every((index) => {
      return squares[index].classList.contains(currentClass);
    });
  });
}

function checkDraw() {
  return [...squares].every((square) => {
    return (
      square.classList.contains(xClass) || square.classList.contains(oClass)
    );
  });
}

function endGame(draw) {
  btnPlayAgain.style.display = "flex";
  if (draw) {
    winnerScreen.innerText = `Empate`;
  } else if (winnerScreen.innerText == "") {
    winnerScreen.innerText = `O jogador ${playerTurn} ganhou`;
  }
}

function swapTurn() {
  playerTurn == "O" ? (playerTurn = "X") : (playerTurn = "O");
}

function addClassToElement(element, currentClass) {
  element.classList.add(currentClass);
}
