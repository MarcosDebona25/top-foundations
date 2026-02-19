let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const btnPiedra = document.getElementById("piedra");
const btnPapel = document.getElementById("papel");
const btnTijera = document.getElementById("tijera");
const btnReiniciar = document.getElementById("btn-reiniciar")

const scoreEl = document.getElementById("score");
const historialEl = document.getElementById("historial");
const ganadorEl = document.getElementById("ganador");

function getComputerChoice() {
    const n = Math.random();
    if (n < 0.33) return "PIEDRA";
    if (n < 0.66) return "PAPEL";
    return "TIJERA";
}

function actPuntos() {
    scoreEl.textContent = `Jugador: ${humanScore} | Computadora: ${computerScore}`;
}

function agregarHistorial(texto) {
    const li = document.createElement("li");
    li.textContent = texto;
    li.style.padding = "5px";
    li.style.listStyleType = "none";

    historialEl.appendChild(li);
}

function ganador() {
    if (humanScore >= 5 || computerScore >= 5) {
        gameOver = true;

        let textoGanador = "";
        if (humanScore > computerScore) textoGanador = "Ganaste la partida!";
        else textoGanador = "La computadora ganó la partida!";

        ganadorEl.textContent = textoGanador;
    }
}

function playRound(humanChoice) {
    if (gameOver) return;

    const computerChoice = getComputerChoice();

    let resultado = "";
    if (humanChoice === computerChoice) {
        resultado = `Empate: ambos eligieron ${humanChoice}`;
    } else if (
        (humanChoice === "PIEDRA" && computerChoice === "TIJERA") ||
        (humanChoice === "PAPEL" && computerChoice === "PIEDRA") ||
        (humanChoice === "TIJERA" && computerChoice === "PAPEL")
    ) {
        humanScore++;
        resultado = `Ganaste: ${humanChoice} vence a ${computerChoice}`;
    } else {
        computerScore++;
        resultado = `Perdiste: ${computerChoice} vence a ${humanChoice}`;
    }

    agregarHistorial(resultado);
    actPuntos();
    ganador();
}

function reiniciarGame() {
    humanScore = 0;
    computerScore = 0;
    gameOver = false;

    scoreEl.innerHTML = "";
    historialEl.innerHTML = "";
    ganadorEl.innerHTML = "";

    actPuntos();
}

btnPiedra.addEventListener("click", () => playRound("PIEDRA"));
btnPapel.addEventListener("click", () => playRound("PAPEL"));
btnTijera.addEventListener("click", () => playRound("TIJERA"));
btnReiniciar.addEventListener("click", () => reiniciarGame());