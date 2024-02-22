// función asíncrona que descarga un archivo
function descargaArchivo(nombreArchivo, callback) {
  setTimeout(() => {
    console.log(`Descargando ${nombreArchivo}...`);
    // Simulamos que la descarga tarda un segundo
    const fileContent = `Contenido de ${nombreArchivo}`;
    callback(fileContent);
  }, 1000);
}

//mostramos el contenido del archivo
function showFileContent(content, callback) {
  setTimeout(() => {
    console.log(`Contenido del archivo: ${content}`);
    callback();
  }, 1000);
}

// Callback hell: se descargar los tres archivos de forma secuencial
descargaArchivo("file1.txt", (content1) => {
  showFileContent(content1, () => {
    descargaArchivo("file2.txt", (content2) => {
      showFileContent(content2, () => {
        descargaArchivo("file3.txt", (content3) => {
          showFileContent(content3, () => {
            console.log("Todos los archivos han sido descargados y mostrados.");
          });
        });
      });
    });
  });
});
