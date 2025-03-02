let frutas = [];
let verduras = [];
let lacteos = [];
let congelados = [];
let dulce = [];

let respuesta = prompt("¿Quieres colocar un alimento en su lista de compras?");

while (respuesta == "si") {
    
    let alimento = prompt("¿Qué alimento deseas agregar?");
    let lista = prompt("¿En que categoria encaja ese alimento?");

    if (lista == "frutas" || lista == "fruta") {
        frutas.push(alimento);
        console.log(frutas);
    } else if (lista == "verduras" || lista == "verdura") {
        verduras.push(alimento);
        console.log(verduras);
    } else if (lista == "lácteos" || lista == "lácteo") {
        lacteos.push(alimento);
        console.log(lacteos);
    } else if (lista == "congelados" || lista == "congelado") {
        congelados.push(alimento);
        console.log(congelados);
    } else if (lista == "dulces" || lista == "dulce") {
        dulce.push(alimento);
        console.log(dulce);
    }

    respuesta = prompt("¿Quieres colocar otro alimento en su lista de compras?");

    console.log(lista);
    console.log(respuesta);
    
}

if (respuesta == "no") {
    asignarTexto ("parrafo1",`Lista de compras:
     Frutas:${frutas}
     Verduras:${verduras}
     Lácteos:${lacteos}
     Congelados:${congelados}
     Dulce:${dulce}`);
} else {

}
function asignarTexto(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}