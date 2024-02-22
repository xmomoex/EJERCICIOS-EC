document
  .getElementById("btnAbrirArchivo")
  .addEventListener("click", async () => {
    // verificamos si el navegador soporta la API
    if ("showOpenFilePicker" in window) {
      try {
        const options = {
          types: [
            {
              description: "Archivos de texto",
              accept: {
                "text/plain": [".txt", ".md"],
              },
            },
          ],
          // hacemos que solo se pueda seleccionar un archivo
          multiple: false,
        };
        // mostrando el selector de archivos
        const [fileHandle] = await window.showOpenFilePicker(options);
        // abrir el archivo
        const file = await fileHandle.getFile();
        // leeemos el archivo como texto
        const contenido = await file.text();
        // mostramos el contenido del archivo en la consola
        console.log(contenido);
      } catch (error) {
        console.error(error);
      }
    } else {
      // si el navegador no soporta la API
      console.log("Tu navegador no soporta la API File System Access.");
    }
  });
