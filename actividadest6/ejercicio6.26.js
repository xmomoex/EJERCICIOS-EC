// Obtener la lista y los elementos
const lista = document.getElementById("lista");
const elementos = Array.from(lista.children);

// Función para desordenar aleatoriamente la lista
function desordenarLista() {
  elementos.sort(() => Math.random() - 0.5);
  elementos.forEach((elemento) => lista.appendChild(elemento));
}

// Función para ordenar alfabéticamente la lista
function ordenarLista() {
  elementos.sort((a, b) => a.textContent.localeCompare(b.textContent));
  elementos.forEach((elemento) => lista.appendChild(elemento));
}

// Preguntar al usuario si quiere ordenar la lista
const confirmacion = confirm("¿Desea ordenar alfabéticamente la lista?");

// Ordenar o desordenar la lista según la respuesta del usuario
if (confirmacion) {
  ordenarLista();
} else {
  desordenarLista();
}
