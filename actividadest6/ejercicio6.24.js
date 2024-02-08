function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 100) + 1;
}

function generarTabla() {
  const filas = parseInt(document.getElementById("filas").value);
  const columnas = parseInt(document.getElementById("columnas").value);
  const tabla = document.getElementById("tabla");

  tabla.innerHTML = ""; // Limpiar tabla antes de generar una nueva

  for (let i = 0; i < filas; i++) {
    const fila = document.createElement("tr");
    for (let j = 0; j < columnas; j++) {
      const celda = document.createElement("td");
      celda.textContent = generarNumeroAleatorio();
      fila.appendChild(celda);
    }
    tabla.appendChild(fila);
  }

  contarFilasYColumnas(filas, columnas);
}

function contarFilasYColumnas(filas, columnas) {
  console.log(`Se han detectado ${filas} filas.`);
  console.log(`Se han detectado ${columnas} columnas.`);
}
