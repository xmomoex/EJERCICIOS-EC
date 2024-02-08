// Obtener el párrafo y el botón limpiar
const parrafo = document.getElementById("contenidoParrafo");
const limpiarBoton = document.getElementById("limpiarBoton");

// Función para manejar el evento clic sobre cualquier elemento de la página
function agregarLetra(event) {
  // Obtener el carácter pulsado
  const letra = event.key;

  // Agregar la letra al contenido del párrafo
  parrafo.textContent += letra;
}

// Agregar event listener para el evento keydown en todo el documento
document.addEventListener("keydown", agregarLetra);

// Función para limpiar el contenido del párrafo
function limpiarContenido() {
  parrafo.textContent = "";
}

// Agregar event listener para el botón de limpiar
limpiarBoton.addEventListener("click", limpiarContenido);
