let numeroUn = 1;

let stringUn = '1';

let numeroTreinta = 30;

let stringTreinta = '30';

let numeroDiez = 10;

let stringDiez = '10';

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

if (numeroUn == stringUn) {
    asignarTextoElemento('parrafo1', 'Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes');
    console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes');
} else {
    asignarTextoElemento('parrafo1','Las variables numeroUn y stringUn no tienen el mismo valor');
    console.log('Las variables numeroUn y stringUn no tienen el mismo valor');
}

if (numeroTreinta === stringTreinta) {
    asignarTextoElemento('parrafo2','Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo');
    console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo');
} else {
    asignarTextoElemento('parrafo2','Las variables numeroTreinta y stringTreinta no tienen el mismo tipo');
    console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo');
}

if (numeroDiez == stringDiez) {
    asignarTextoElemento('parrafo3','Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes');
    console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes');
} else {
    asignarTextoElemento('parrafo3','Las variables numeroDiez y stringDiez no tienen el mismo valor');
    console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor');
}