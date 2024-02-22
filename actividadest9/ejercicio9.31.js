// retorna una promesa que se resuelve después de un tiempo dado
function esperar(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// encadenamos las acciones después de que la promesa se cumple
esperar(1000)
  .then(() => {
    console.log("Primera acción completada después de 1 segundo");
    return esperar(2000);
  })
  .then(() => {
    console.log("Segunda acción completada después de 2 segundos");
    return esperar(3000);
  })
  .then(() => {
    console.log("Tercera acción completada después de 3 segundos");
    console.log("Todas las acciones han sido completadas");
  });
