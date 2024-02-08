const imagenes = {
  0: "img/1.jpg",
  1: "img/2.jpg",
  2: "img/3.jpg",
  3: "img/4.jpg",
  4: "img/5.jpg",
  5: "img/6.jpg",
  6: "img/7.jpg",
  7: "img/8.jpg",
  8: "img/9.jpg",
  9: "img/0.jpg",
};

function cambiarImagen(tecla) {
  const contenedor = document.getElementById("imagenContainer");
  contenedor.innerHTML = "";

  if (tecla in imagenes) {
    const imagenSrc = imagenes[tecla];
    const imagen = document.createElement("img");
    imagen.src = imagenSrc;
    contenedor.appendChild(imagen);
  }
}
document.addEventListener("keydown", function (event) {
  const teclaPresionada = event.key;

  if (/[0-9]/.test(teclaPresionada)) {
    cambiarImagen(teclaPresionada);
  }
});
