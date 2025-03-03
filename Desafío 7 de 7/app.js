

function suma() {

    let a = parseFloat(prompt("ingresa el primer número"));
    let b = parseFloat(prompt("ingresa el segundo número"));

    alert(a+b);
}

function resta() {
    let a = parseFloat(prompt("ingresa el primer número"));
    let b = parseFloat(prompt("ingresa el segundo número"));

    if (a == NaN) {
        a = 0
    }

    alert(a-b);
}

function multiplicacion() {
    let a = parseFloat(prompt("ingresa el primer número"));
    let b = parseFloat(prompt("ingresa el segundo número"));

    alert(a*b);
}

function division() {
    let a = parseFloat(prompt("ingresa el primer número"));
    let b = parseFloat(prompt("ingresa el segundo número"));

    if (b === 0) {
        alert("Error: imposible dividir entre 0");
    } else {
        alert(a/b);
    }
}

function salir() {
    alert("Hasta la próxima");
    document.getElementById("suma").setAttribute("disabled","true");
    document.getElementById("resta").setAttribute("disabled","true");
    document.getElementById("multiplicacion").setAttribute("disabled","true");
    document.getElementById("division").setAttribute("disabled","true");
    document.getElementById("salir").setAttribute("disabled","true");
}