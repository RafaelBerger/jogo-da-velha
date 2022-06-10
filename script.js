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
const quadrados = document.querySelectorAll(".square");
let combinacoesVitoria = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["3", "6", "9"],
  ["3", "5", "7"],
  ["1", "5", "9"],
];
let playerTurn;

//#endregion

quadrados.forEach((square) => {
  square.addEventListener("click", handleClick, { once: true });
});

function handleClick(e) {
  if (playerTurn == "o") {
    e.target.innerText = "O";
    playerTurn = "x";
  } else if (playerTurn == "x") {
    e.target.innerText = "X";
    playerTurn = "o";
  }
}
