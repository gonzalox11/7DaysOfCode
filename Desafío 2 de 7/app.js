alert("Hola");

let nombreUsuario = prompt("¿Cuál es tu nombre?");
let edadUsuario = prompt("¿Cuántos años tienes?");
let lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

console.log(nombreUsuario);
console.log(edadUsuario);
console.log(lenguaje);

alert(`Hola ${nombreUsuario}, tienes ${edadUsuario} años y  ya estas aprendiendo ${lenguaje}`);

let respuesta = prompt(`¿Te gusta estudiar ${lenguaje}? responde con el número 1 para si o 2 para no`);

if (respuesta == 1) {
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} if (respuesta == 2) {
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
}