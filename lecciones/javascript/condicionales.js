let edad = 19;

if (edad >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

// Lo mismo pero con funciones
function esMayorDeEdad(edad) {
  return edad >= 18;
}

edad = 16;
if (esMayorDeEdad(edad)) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

// Else if
if (edad > 18) {
  console.log("Eres mayor de edad");
} else if (edad == 18) {
  console.log("Acaba de cumplir la mayoría de edad");
} else {
  console.log("Eres menor de edad");
}

const letra = "d";
if (letra == "a") {
  console.log("Es la letra a");
} else if (letra == "b") {
  console.log("Es la letra b");
} else if (letra == "c") {
  console.log("Es la letra c");
} else if (letra == "d") {
  console.log("Es la letra d");
} else if (letra == "f") {
  console.log("Es la letra f");
} else {
  console.log("No es ninguna de las letras anteriores");
}

console.log("Fin")