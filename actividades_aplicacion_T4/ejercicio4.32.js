//creamos la funcion
function palabras(palabra1, palabra2) {
  palabra1 = palabra1.sort();
  palabra2 = palabra2.sort();
  if (palabra1 == palabra2) {
    document.write("true");
  } else {
    document.write("false");
  }
}
palabras("lepi", "pile");
