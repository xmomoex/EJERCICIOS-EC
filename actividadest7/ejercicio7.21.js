// Función para eliminar un elemento de la lista
function eliminarElemento(event) {
  event.target.parentNode.remove();
}

// Añadir event listener a cada botón de eliminar
const botonesEliminar = document.querySelectorAll(".eliminar");
botonesEliminar.forEach((boton) => {
  boton.addEventListener("click", eliminarElemento);
});

// Función para agregar un nuevo elemento a la lista
function agregarElemento() {
  const nuevoTexto = document.getElementById("nuevoElemento").value;
  if (nuevoTexto.trim() !== "") {
    const lista = document.getElementById("lista");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nuevoTexto;
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "X";
    botonEliminar.classList.add("eliminar");
    botonEliminar.addEventListener("click", eliminarElemento);
    nuevoElemento.appendChild(botonEliminar);
    lista.appendChild(nuevoElemento);
    document.getElementById("nuevoElemento").value = ""; // Limpiar el input
  } else {
    alert("Por favor, introduce un texto válido para el nuevo elemento.");
  }
}
