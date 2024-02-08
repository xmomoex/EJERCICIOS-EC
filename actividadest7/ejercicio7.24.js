function eliminarVocal(vocal) {
  const textoElemento = document.getElementById("texto");
  const texto = textoElemento.textContent;
  const nuevoTexto = texto.replace(new RegExp(vocal, "gi"), ""); // 'gi' para que sea insensible a mayúsculas y minúsculas
  textoElemento.textContent = nuevoTexto;
}
