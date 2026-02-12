function getComputerChoice() {
    const n = Math.random();

    if (n < 0.33) return "PIEDRA";
    else if (n >= 0.33 && n < 0.66) return "PAPEL";
    else return "TIJERA";
}

function getHumanChoice() {
    let m;

    do {
        opcion = prompt("Ingrese su opción (piedra, papel, tijera): ");
        m = opcion.trim().toUpperCase();
    } while (!(["PIEDRA", "PAPEL", "TIJERA"].includes(m)))

    return m;
}

function playRound(humanChoice, computerChoice) {
    console.log(`   Opciones ingresadas: 
                    - Jugador:      ${humanChoice}
                    - Computadora   ${computerChoice}`);


    let ganoHumano = false;
    let empate = false;

    if (humanChoice == computerChoice) empate = true;
    else if (humanChoice == "PIEDRA") computerChoice == "PAPEL" ? ganoHumano = false : ganoHumano = true;
    else if (humanChoice == "PAPEL") computerChoice == "TIJERA" ? ganoHumano = false : ganoHumano = true;
    else if (humanChoice == "TIJERA") computerChoice == "PIEDRA" ? ganoHumano = false : ganoHumano = true;

    if (empate) console.log("Empate!");
    else {
        if (ganoHumano) {
            humanScore++;
            console.log(`   Ganó Humano!
                            Puntaje actualizado: 
                                - Jugador:      ${humanScore}
                                - Computadora   ${computerScore}`);
        }
        else {
            computerScore++;
            console.log(`   Ganó Computadora!
                            Puntaje actualizado: 
                                - Jugador:      ${humanScore}
                                - Computadora   ${computerScore}`);
        }
    }
}

function playGame() {

    for (let i = 0; i<5; i ++) {
        const x = getHumanChoice();
        const y = getComputerChoice();
        playRound(x, y);
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();