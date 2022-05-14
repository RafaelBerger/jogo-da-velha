//true é circulo - false é quadrado

let vezDoJogador = undefined

let areaDosBotoes = document.getElementById("escolha-jogador")

const botaoCirculo = document.getElementById("circulo").addEventListener("click", () => {
    vezDoJogador = true
    areaDosBotoes.style.display = "none"
})
const botaoQuadrado = document.getElementById("quadrado").addEventListener("click", () => {
    vezDoJogador = false
    areaDosBotoes.style.display = "none"
})

const square1 = document.querySelector(".square-1")
const square2 = document.querySelector(".square-2")
const square3 = document.querySelector(".square-3")
const square4 = document.querySelector(".square-4")
const square5 = document.querySelector(".square-5")
const square6 = document.querySelector(".square-6")
const square7 = document.querySelector(".square-7")
const square8 = document.querySelector(".square-8")
const square9 = document.querySelector(".square-9")


function adicionaCirculo(circle) {
    circle.classList.add("active-circle")
}

function adicionaQuadrado(square) {
    square.classList.add("active-square")
}

function adicionaItem(areaSelecionada) {
    if(vezDoJogador == true){
        adicionaCirculo(areaSelecionada)
        vezDoJogador = false
    }else if (vezDoJogador == false){
        adicionaQuadrado(areaSelecionada)
        vezDoJogador = true
    }
}   


square1.addEventListener("click", () => {
    adicionaItem(square1)
})

square2.addEventListener("click", () => {
    adicionaItem(square2)
})

square3.addEventListener("click", () => {
    adicionaItem(square3)
})

square4.addEventListener("click", () => {
    adicionaItem(square4)
})

square5.addEventListener("click", () => {
    adicionaItem(square5)
})

square6.addEventListener("click", () => {
    adicionaItem(square6)
})

square7.addEventListener("click", () => {
    adicionaItem(square7)
})

square8.addEventListener("click", () => {
    adicionaItem(square8)
})

square9.addEventListener("click", () => {
    adicionaItem(square9)
})

