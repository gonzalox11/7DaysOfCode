function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

let respuestaUsuario = prompt("¿Prefieres ir al área de Front-End o al área de Back-End?");


    

if (respuestaUsuario == "Front-End") {
    let respuesta2 = prompt("¿Prefieres aprender React o Vue?");

    alert(`así que quieres aprender ${respuesta2}`);

} else if (respuestaUsuario == "Back-End") {
    let respuesta2 = prompt("¿Prefieres aprender C# o Java?");

    alert(`así que quieres aprender ${respuesta2}`);
}

prompt(`¿Prefieres seguir especializandote en eso o 
    desarrollarte para convertirte en Fullstack?`);

let listaTecnologias = [];
let i = 0

while (i <= 0) {
   let respuesta4 = prompt("¿Hay alguna otra tecnología que te gustaria aprender?");

   if (respuesta4 == "" || respuesta4 == undefined || respuesta4 == null) {
    i++
   } else {
    listaTecnologias.push(respuesta4);
    alert(`así que ${respuesta4}, es una buena opción`);
    console.log(respuesta4);
    console.log(listaTecnologias);
   }
}

alert("Bueno, eso fue todo");
alert("Suerte en tus estudios, adios");