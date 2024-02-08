let anchoCajaVerde = 10;
let anchoCajaRoja = 10;

// Función para actualizar el ancho de la caja verde
function actualizarAnchoCajaVerde() {
  const cajaVerde = document.getElementById("cajaVerde");
  anchoCajaVerde += 5;
  cajaVerde.style.width = anchoCajaVerde + "px";
  if (anchoCajaVerde >= 500) {
    terminarJuego("GANA VERDE");
  }
}

// Función para actualizar el ancho de la caja roja
function actualizarAnchoCajaRoja() {
  const cajaRoja = document.getElementById("cajaRoja");
  anchoCajaRoja += 5;
  cajaRoja.style.width = anchoCajaRoja + "px";
  if (anchoCajaRoja >= 500) {
    terminarJuego("GANA ROJO");
  }
}

// Función para terminar el juego
function terminarJuego(mensaje) {
  document.removeEventListener("keydown", manejarTecla);
  document.getElementById("mensaje").textContent = mensaje;
}

// Función para manejar el evento de tecla pulsada
function manejarTecla(event) {
  if (event.key === "a") {
    actualizarAnchoCajaVerde();
  } else if (event.key === "ñ") {
    actualizarAnchoCajaRoja();
  }
}

// Agregar event listener para el evento keydown
document.addEventListener("keydown", manejarTecla);
