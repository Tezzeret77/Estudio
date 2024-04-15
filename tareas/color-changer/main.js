
    const square = document.getElementById("square");
    const colorButtons = document.querySelectorAll(".color-button");
    const colorText = document.getElementById ("color-text");
  
    colorButtons.forEach(button => {
      button.addEventListener("click", function() {
        const color = this.getAttribute("data-color");
        square.style.backgroundColor = color;
        colorText.textContent = "Color seleccionado: " + color;
      });
    });
