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
      resolve();
    }
  });
}

//cuando el dom está cargado mostraría el mensaje
domCargado().then(() => {
  const mensajeDiv = document.getElementById("mensaje");
  mensajeDiv.innerText = "LISTO PARA ACTUAR";
});
