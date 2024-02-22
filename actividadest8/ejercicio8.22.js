function procesarDatos(datos) {
  try {
    // verificamos si los datos estan incompletos
    if (!datos.nombre || !datos.edad || !datos.correo) {
      throw new Error("Faltan datos obligatorios");
    }

    // verificamos la edad
    if (isNaN(datos.edad) || datos.edad <= 0) {
      throw new TypeError("La edad debe ser un número positivo");
    }

    // verificamos el correo
    if (!validarCorreo(datos.correo)) {
      throw new SyntaxError("El formato del correo electrónico es incorrecto");
    }
    console.log("Datos procesados correctamente");
  } catch (error) {
    console.error("Se ha producido un error:", error.message);
  } finally {
    console.log("Proceso finalizado");
  }
}

//funcion para validar el correo
function validarCorreo(correo) {
  return /\S+@\S+\.\S+/.test(correo);
}

const datos1 = { nombre: "Juan", edad: 25 };
const datos2 = {
  nombre: "María",
  edad: "veinticinco",
  correo: "maria.example.com",
};

console.log("Procesando datos 1:");
procesarDatos(datos1);

console.log("\nProcesando datos 2:");
procesarDatos(datos2);
