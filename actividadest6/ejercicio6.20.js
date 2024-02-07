let listaDesordenada = document.querySelector("ul");
while (true) {
  let palabra = prompt("Inserte un ingrediente o pulse cancelar");
  if (palabra === null || palabra === "") {
    break; //sale del bbucle
  }
  let linea = document.createElement("li");
  linea.textContent = palabra;
  listaDesordenada.appendChild(linea);
}
