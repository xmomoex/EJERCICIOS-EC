// Simulando una función asíncrona que descarga un archivo
function downloadFile(filename, callback) {
  setTimeout(() => {
    console.log(`Descargando ${filename}...`);
    // Simulamos que la descarga tarda un segundo
    const fileContent = `Contenido de ${filename}`;
    callback(fileContent);
  }, 1000);
}

// Función que muestra el contenido del archivo
function showFileContent(content, callback) {
  setTimeout(() => {
    console.log(`Contenido del archivo: ${content}`);
    callback();
  }, 1000);
}

// Callback hell: Descarga de los tres archivos de forma secuencial
downloadFile("file1.txt", (content1) => {
  showFileContent(content1, () => {
    downloadFile("file2.txt", (content2) => {
      showFileContent(content2, () => {
        downloadFile("file3.txt", (content3) => {
          showFileContent(content3, () => {
            console.log("Todos los archivos han sido descargados y mostrados.");
          });
        });
      });
    });
  });
});
