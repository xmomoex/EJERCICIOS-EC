function procesarDatos(datos) {
  try {
    // Verificar si los datos están incompletos
    if (!datos.nombre || !datos.edad || !datos.correo) {
      throw new Error("Faltan datos obligatorios");
    }

    // Verificar si la edad es válida
    if (isNaN(datos.edad) || datos.edad <= 0) {
      throw new TypeError("La edad debe ser un número positivo");
    }

    // Verificar si el correo es válido
    if (!validarCorreo(datos.correo)) {
      throw new SyntaxError("El formato del correo electrónico es incorrecto");
    }

    // Procesar los datos...
    console.log("Datos procesados correctamente");
  } catch (error) {
    console.error("Se ha producido un error:", error.message);
  } finally {
    console.log("Proceso finalizado");
  }
}

function validarCorreo(correo) {
  // Función de validación de correo simple para propósitos de demostración
  return /\S+@\S+\.\S+/.test(correo);
}

// Ejemplo de uso:
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

/**
 * Error: Si faltan datos obligatorios, lanzará un error de tipo Error.
Excepción: Si la edad no es un número positivo, lanzará una excepción de tipo TypeError.
Aviso: Si el formato del correo electrónico es incorrecto, lanzará un aviso utilizando una excepción de tipo SyntaxError.
En el bloque catch, se capturan los errores y se muestra un mensaje adecuado. El bloque finally garantiza que el proceso finalice correctamente, independientemente de si se lanzaron errores o no.
 */
