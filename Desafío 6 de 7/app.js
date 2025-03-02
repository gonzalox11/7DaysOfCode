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

    if(respuesta == "no") {

    let respuesta2 = prompt("¿Quieres eliminar algún alimento de la lista de compras?");

    while (respuesta2 == "si") {
        
            alimento = prompt(`Lista de compras:
            Frutas:${frutas}
            Verduras:${verduras}
            Lácteos:${lacteos}
            Congelados:${congelados}
            Dulce:${dulce}
            ¿Qué alimento desea eliminar?`);
            
            lista = prompt("¿En que categoria está ese alimento?");

            if (lista == "frutas" || lista == "fruta") {
                let alimentoEliminado = frutas.indexOf(alimento);
                frutas.splice(alimentoEliminado);
                console.log(frutas);
            } else if (lista == "verduras" || lista == "verdura") {
                let alimentoEliminado = verduras.indexOf(alimento);
                verduras.splice(alimentoEliminado);
                console.log(verduras);
            } else if (lista == "lácteos" || lista == "lácteo") {
                let alimentoEliminado = lacteos.indexOf(alimento);
                lacteos.splice(alimentoEliminado);
                console.log(lacteos);
            } else if (lista == "congelados" || lista == "congelado") {
                let alimentoEliminado = congelados.indexOf(alimento);
                congelados.splice(alimentoEliminado);
                console.log(congelados);
            } else if (lista == "dulces" || lista == "dulce") {
                let alimentoEliminado = indexof.indexOf(alimento);
                dulce.splice(alimentoEliminado);
                console.log(dulce);
            }

            if (alimento == "") {
                alert("¡No fue posible encontrar el elemento en la lista!");
            }

            respuesta2 = prompt("¿Quieres eliminar otro alimento de la lista de compras?");
        }
    }
  

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