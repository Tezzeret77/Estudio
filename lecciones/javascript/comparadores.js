// COMPARADORES
// Igual a
let n = 1;
let n2 = 1;
console.log("Iguales");
console.log(n == n2);
console.log(1 == 1);

let n3 = 2;
console.log("Desigual");
console.log(n == n3);
console.log(1 == 2);

let pepe1 = "Pepe";
let pepe2 = "Pepe";
let textoIgual = pepe1 == pepe2;
console.log("Textos iguales:");
console.log(textoIgual);
console.log("Textos distinto:");
pepe2 = "PepE";
textoIgual = pepe1 == pepe2;
console.log(textoIgual);

let b = true;
let b2 = false;

// Casos especiales
false == null;
false == undefined;
false == 0;
false == "";

// Distinto a
let n4 = 3;
let n5 = 6;
console.log("Distinto:");
console.log(n4 != n5);

// Mayor que
let n6 = 8;
let n7 = 8;
console.log("Mayor que:");
console.log(n6 > n7);
// Las comparaciones en cadenas de texto se rigen por el valor del código ASCII
console.log("B" > "A");
console.log("a" > "A");

console.log("Mayor o igual que:");
console.log(n6 >= n7);

// Menor que
console.log("Menor que:");
console.log(n6 < n7);
console.log("Menor o igual que:");
console.log(n6 <= n7);

// Varios comparadores
console.log("Varios comparadores:");
console.log(1 + 1 > 0 < 10);
console.log(1 + 1 > 0 < 10);
