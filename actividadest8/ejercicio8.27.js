document
  .getElementById("btnAbrirArchivo")
  .addEventListener("click", async () => {
    // Verifica si el navegador soporta la API
    if ("showOpenFilePicker" in window) {
      try {
        // Opciones para el selector de archivos
        const options = {
          types: [
            {
              description: "Archivos de texto",
              accept: {
                "text/plain": [".txt", ".md"],
              },
            },
          ],
          // Permite seleccionar solo un archivo
          multiple: false,
        };
        // Muestra el selector de archivos
        const [fileHandle] = await window.showOpenFilePicker(options);
        // Abre el archivo
        const file = await fileHandle.getFile();
        // Lee el archivo como texto
        const contenido = await file.text();
        // Muestra el contenido del archivo en la consola
        console.log(contenido);
      } catch (error) {
        console.error(error);
      }
    } else {
      // El navegador no soporta la API
      console.log("Tu navegador no soporta la API File System Access.");
    }
  });
