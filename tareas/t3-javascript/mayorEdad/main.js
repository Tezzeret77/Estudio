function esMayorDeEdad() {
  const edad = document.querySelector("#edad").value;


  if (edad > 18) {
    resultado = "Sí";
  } else if (edad == 18) {
    resultado = "A vende coca y fuma porros";
  } else {
    resultado = "No";
  }
  

  document.querySelector("#mayorEdad").innerText = resultado;
  }
