//funcion del click
function click() {
  return new Promise((resolve) => {
    const enlace = document.getElementById("enlace");
    enlace.addEventListener("click", () => {
      resolve();
    });
  });
}

//funcion que espera la letra g
function teclag() {
  return new Promise((resolve) => {
    const teclaG = "g";
    document.addEventListener("keydown", (event) => {
      if (event.key === teclaG) {
        resolve();
      }
    });
  });
}

//cuando se cumple se muestra el mensaje
Promise.all([click(), teclag()]).then(() => {
  const mensajeDiv = document.getElementById("mensaje");
  mensajeDiv.innerText =
    "Has hecho click en el  enlace y has pulsado la tecla G";
});
