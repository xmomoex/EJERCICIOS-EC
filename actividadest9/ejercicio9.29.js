function domCargado() {
  return new Promise((resolve) => {
    if (document.readyState === "loading") {
      // Si el DOM aún está cargando, mostrar "CARGANDO"
      const mensajeDiv = document.getElementById("mensaje");
      mensajeDiv.innerText = "CARGANDO...";

      document.addEventListener("DOMContentLoaded", () => {
        resolve();
      });
    } else {
      // Si el DOM ya está cargado, resolver la promesa inmediatamente
      resolve();
    }
  });
}

domCargado().then(() => {
  // Una vez que el DOM esté completamente cargado, mostrar "LISTO PARA ACTUAR"
  const mensajeDiv = document.getElementById("mensaje");
  mensajeDiv.innerText = "LISTO PARA ACTUAR";
});
