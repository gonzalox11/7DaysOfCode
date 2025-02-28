let listaNumerosSorteados = [];
let maxNumero = 10;
let maxIntentos = 3;
let intentos = 1;
let numeroSecreto = generarNumeroSecreto();

function verificarIntento() {
    numeroUsuario = parseInt (document.getElementById("numeroUsuario").value);

    if (numeroUsuario == numeroSecreto) {
        asignarTexto("p",`Correcto, el número secreto era ${numeroSecreto}`);
        document.getElementById("nuevoJuego").removeAttribute("disabled");
    } else if (numeroUsuario > maxNumero || numeroUsuario < 1) {
        asignarTexto("p",`Dije entre 1 y ${maxNumero}`);
    } else if (numeroUsuario > numeroSecreto) {
        asignarTexto("p","Fallaste el número secreto es menor");
    } else asignarTexto("p","Fallaste el número secreto es mayor");

    intentos++;
    limpiarCaja();
    console.log(intentos)

    if (intentos > maxIntentos) {
        asignarTexto("p",`se te acabaron los intentos, el número era ${numeroSecreto}`);
        document.getElementById("nuevoJuego").removeAttribute("disabled");
        document.getElementById("numeroUsuario").setAttribute("disabled","true");
        document.getElementById("intento").setAttribute("disabled","true");
    }
}


function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById("nuevoJuego").setAttribute("disabled","true");
    document.getElementById("numeroUsuario").removeAttribute("disabled");
    document.getElementById("intento").removeAttribute("disabled");
}

function condicionesIniciales() {
    asignarTexto("p",`coloca un número entre 1 y ${maxNumero}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja() {
    document.getElementById("numeroUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroRandom = Math.floor(Math.random()*maxNumero)+1;
    let cantidadLista = listaNumerosSorteados.length;

    console.log(numeroRandom);
    console.log(listaNumerosSorteados);

    if (cantidadLista == maxNumero) {
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroRandom)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroRandom);
        return numeroRandom;
    }
}


asignarTexto ("p",`coloca un número entre 1 y ${maxNumero}`);