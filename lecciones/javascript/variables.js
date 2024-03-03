// Variables
var n = 123;
let n2 = 545;
const n3 = 453;

console.log("Variable n:");
console.log(n);
console.log("Variable n2:");
console.log(n2);
console.log("Variable n3:");
console.log(n3);

// ERROR (Las constantes no se pueden cambiar)
// n3 = 4;

n2 = 45;
// El + se utiliza para sumar o concatenar (depende del tipo de la variable)
console.log("Variable n2 modificada: " + n2);

let n4 = 3;
let n5 = 2;
let mipolla = n + n4 + n5;
// En el momento que hay texto, los números no se suman, sino que se concatenan
console.log("Suma: " + mipolla);
// Podemos priorizar el orden de la suma mediante el uso de paréntesis
console.log("Suma 2: " + (n4 + n5));

console.log("============== VARIABLES NUMÉRICAS ==============");
// VARIABLES NUMÉRICAS
let substract = 10 - 6;
console.log("Resta: " + substract);
let division = 10 / 2;
console.log("División: " + division);
let multiply = 10 * 2;
console.log("Multiplicación: " + multiply);
let exponentiation = 10 ** 2;
console.log("Elevado: " + exponentiation);
let par = 10 % 2 == 0;
console.log("Par: " + par);
let impar = 11 % 2 == 0;
console.log("Par: " + impar);

console.log("============== VARIABLES DE TEXTO ==============");
// VARIABLES DE TEXTO
let hello = "Buenas tardes";
console.log(hello);
let name = "Jesumi";
// Concatenamos el texto con la suma
console.log("Hola " + name);

// VARIABLES BOOLEANAS / NULO / INDEFINIDO
console.log(
  "============== VARIABLES BOOLEANAS / NULO / INDEFINIDO =============="
);
let verdadero = true;
console.log(verdadero);
let falso = false;
console.log(falso);
let nulo = null;
console.log(nulo);
let indefinido;
console.log(indefinido);
