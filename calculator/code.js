function operation(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);

    if (operator === "/" && b === 0) return "Error";

    switch (operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return a / b;
        default: return "";
    }
}

function formatearResultado(valor) {
    if (valor === "Error") return valor;
    return parseFloat(valor.toFixed(10)).toString();
}

function actualizarDisplay() {
    let historial = firstNumber || "";

    if (operator) historial += " " + operator;
    if (secondNumber) historial += " " + secondNumber;

    parrafoHistorial.textContent = historial;
    parrafoResultado.textContent = resultado;
}

function limpiarGlobal() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    resultado = "";
    actualizarDisplay();
}

let firstNumber = "";
let secondNumber = "";
let operator = "";
let resultado = "";

const parrafoHistorial = document.getElementById("historial");
const parrafoResultado = document.getElementById("resultado");

const btnIgual = document.getElementById("btn-igual");
const btnLimpiar = document.getElementById("btn-limpiar");

const listaBtnNumero = document.querySelectorAll(".btn-numero");
const listaBtnOperador = document.querySelectorAll(".btn-operador");


listaBtnNumero.forEach((btn) => {
    btn.addEventListener("click", () => {

        if (resultado) limpiarGlobal();

        const valor = btn.textContent;

        if (!operator) {
            if (valor === "." && firstNumber.includes(".")) return;
            firstNumber += valor;
        } else {
            if (valor === "." && secondNumber.includes(".")) return;
            secondNumber += valor;
        }

        actualizarDisplay();
    });
});


listaBtnOperador.forEach((btn) => {
    btn.addEventListener("click", () => {

        if (resultado) {
            firstNumber = resultado;
            secondNumber = "";
            resultado = "";
        }

        const valor = btn.textContent;

        if (firstNumber) {
            operator = valor;
            actualizarDisplay();
        }
    });
});

btnIgual.addEventListener("click", () => {
    if (!firstNumber || !secondNumber || !operator) return;

    const calculo = operation(firstNumber, secondNumber, operator);
    resultado = formatearResultado(calculo);
    actualizarDisplay();
});

btnLimpiar.addEventListener("click", () => {
    limpiarGlobal();
});