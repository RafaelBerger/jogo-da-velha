// #region Variáveis
let vezDoJogador = undefined;

let areaDosBotoes = document.getElementById("escolha-jogador");
let areaDoJogo = document.getElementById("area-jogo");
let vencedor = document.getElementById("vencedor");
let telaDeVitoria = document.getElementById("tela-vitoria");

const btnO = document.querySelector("#o").addEventListener("click", () => {
  vezDoJogador = "o";
  jogoEstadoVisual();
});

const btnX = document.querySelector("#x").addEventListener("click", () => {
  vezDoJogador = "x";
  jogoEstadoVisual();
});

let movimentosDoO = [];
let movimentosDoX = [];
//#endregion

const jogoEstadoVisual = () => {
  if (vezDoJogador === undefined) {
    areaDoJogo.style.display = "none";
  } else {
    areaDoJogo.style.display = "grid";
    areaDosBotoes.style.display = "none";
  }
};

// jogoEstadoVisual();

document.addEventListener("click", (event) => {
  if (event.target.id == "body") {
    return "";
  } else {
    if (vezDoJogador == "o" && event.target.innerText == "") {
      event.target.innerText = "O";
      movimentosDoO.push(event.target.id);
      vezDoJogador = "x";
      // checaVitoria();
      console.log(movimentosDoO);
    } else if (vezDoJogador == "x" && event.target.innerText == "") {
      event.target.innerText = "X";
      movimentosDoX.push(event.target.id);
      vezDoJogador = "o";
      // checaVitoria();
    }
    checaVitoria();
  }
});

function checaVitoria() {
  if (
    movimentosDoO.includes(
      ("1" && "2" && "3") ||
        ("4" && "5" && "6") ||
        ("7" && "8" && "9") ||
        ("1" && "4" && "7") ||
        ("2" && "5" && "8") ||
        ("3" && "6" && "9") ||
        ("3" && "5" && "7") ||
        ("1" && "5" && "9")
    ) === true
  ) {
    telaDeVitoria.display = "flex";
    vencedor.innerText = "O jogador O ganhou!";
  }

  if (
    movimentosDoX.includes(
      ("1" && "2" && "3") ||
        ("4" && "5" && "6") ||
        ("7" && "8" && "9") ||
        ("1" && "4" && "7") ||
        ("2" && "5" && "8") ||
        ("3" && "6" && "9") ||
        ("3" && "5" && "7") ||
        ("1" && "5" && "9")
    ) === true
  ) {
    telaDeVitoria.display = "flex";
    vencedor.innerText = "O jogador X ganhou!";
  }
}
