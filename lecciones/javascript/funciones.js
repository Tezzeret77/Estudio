// Funcion: Trozo de codigo que se puede reutilizar

function hello() {
  console.log("Hola Mundo");
}

hello();

// Parámetros
function helloName(nombre) {
  console.log("Hola " + nombre);
}

helloName("Jesumi");
helloName("Javi");

// Retornar valores
function sum(n1, n2) {
  return n1 + n2;
}

const suma1 = sum(3, 5);
console.log(suma1);

const sum2 = sum("a", 1);
console.log(sum2);


// Ejemplo de aplicación para picar en el trabajo
function picar() {
    const now = new Date()
    guardarHora(now)
}

function guardarHora(hora) {
    // Lógica que guarda en base de datos
    console.log("Hora guardada: " + hora)
}

picar()