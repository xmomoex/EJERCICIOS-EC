// Obtener la caja azul
const caja = document.getElementById("caja");

// Función para obtener una posición aleatoria dentro de la página
function obtenerPosicionAleatoria() {
  const anchoVentana = window.innerWidth;
  const altoVentana = window.innerHeight;
  const anchoCaja = caja.offsetWidth;
  const altoCaja = caja.offsetHeight;

  const nuevaPosicionX = Math.floor(Math.random() * (anchoVentana - anchoCaja));
  const nuevaPosicionY = Math.floor(Math.random() * (altoVentana - altoCaja));

  return { x: nuevaPosicionX, y: nuevaPosicionY };
}

// Función para mover la caja a una nueva posición aleatoria
function moverCaja() {
  const nuevaPosicion = obtenerPosicionAleatoria();
  caja.style.left = nuevaPosicion.x + "px";
  caja.style.top = nuevaPosicion.y + "px";
}

// Función para verificar si el ratón está sobre la caja y moverla si es necesario
function verificarRaton(event) {
  const cajaRect = caja.getBoundingClientRect();
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  if (
    mouseX >= cajaRect.left &&
    mouseX <= cajaRect.right &&
    mouseY >= cajaRect.top &&
    mouseY <= cajaRect.bottom
  ) {
    moverCaja();
  }
}

// Agregar event listener para el evento mousemove
document.addEventListener("mousemove", verificarRaton);
