let divContenedor = document.getElementById("container");
let btnGenerar = document.getElementById("generar");
let btnLimpiar = document.getElementById("limpiar");

btnGenerar.addEventListener("click", generarDivs);
btnLimpiar.addEventListener("click", limpiarDivs);

function obtenerColorRandom() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return { r, g, b };
}

function generarDivs() {
    limpiarDivs();

    let opcion;
    do {
        opcion = parseInt(prompt("Ingrese la cantidad (min 16, max 64)"));
    } while (opcion < 16 || opcion > 64);

    const anchoCelda = 100 / opcion;

    for (let i = 0; i < opcion * opcion; i++) {
        let divCreado = document.createElement("div");
        divCreado.style.width = `${anchoCelda}%`;
        divCreado.style.height = `${anchoCelda}%`;
        divCreado.style.backgroundColor = "white";

        divCreado.addEventListener("mouseover", () => {
            if (!divCreado.dataset.r) {
                const color = obtenerColorRandom();
                divCreado.dataset.r = color.r;
                divCreado.dataset.g = color.g;
                divCreado.dataset.b = color.b;
                divCreado.dataset.opacidad = 0.1;
            }

            let opacidadActual = parseFloat(divCreado.dataset.opacidad);

            if (opacidadActual < 1) {
                opacidadActual = Math.min(opacidadActual + 0.1, 1);
                divCreado.dataset.opacidad = opacidadActual;
                divCreado.style.backgroundColor = `rgba(${divCreado.dataset.r}, ${divCreado.dataset.g}, ${divCreado.dataset.b}, ${opacidadActual})`;
            }
        });

        divContenedor.appendChild(divCreado);
    }
}

function limpiarDivs() {
    const contenedor = document.getElementById("container");
    contenedor.innerHTML = "";
}