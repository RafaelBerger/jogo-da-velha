// #region handle the screen

const btnO = document.querySelector("#o").addEventListener("click", () => {
  playerTurn = "o";
  board.style.display = "grid";
  choosePlayer.style.display = "none";
});
const btnX = document.querySelector("#x").addEventListener("click", () => {
  playerTurn = "x";
  board.style.display = "grid";
  choosePlayer.style.display = "none";
});

const board = document.querySelector("#area-jogo");
const choosePlayer = document.querySelector("#escolha-jogador");

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
  const currentClass = playerTurn == "o" ? oClass : xClass;

  if (playerTurn == "o") {
    e.target.innerText = "O";
  } else if (playerTurn == "x") {
    e.target.innerText = "X";
  }
  addClassToElement(element, currentClass);

  if (checkWin(currentClass)) {
  }
  swapTurn();
}

function checkWin(currentClass) {
  return winningCombination.some((combinations) => {
    return combinations.every((index) => {
      return squares[index].classList.contains(currentClass);
    });
  });
}

function swapTurn() {
  playerTurn == "o" ? (playerTurn = "x") : (playerTurn = "o");
}

function addClassToElement(element, currentClass) {
  element.classList.add(currentClass);
  console.log(element);
}

//TODO: Bugs com as classes, descobrir o porquê não está funcionando classList.add (está undefined)
//
