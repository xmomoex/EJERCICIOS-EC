function lanzarError(opcion) {
  switch (opcion) {
    case 1:
      try {
        throw new Error("Error genérico");
      } catch (error) {
        console.log("Se ha producido un error: " + error.message);
      }
      break;
    case 2:
      try {
        throw new TypeError("Tipo de dato incorrecto");
      } catch (error) {
        console.log("Se ha producido un error: " + error.message);
      }
      break;
    case 3:
      try {
        throw new RangeError("Valor fuera de rango");
      } catch (error) {
        console.log("Se ha producido un error: " + error.message);
      }
      break;
    case 4:
      try {
        throw new ReferenceError("Variable no definida");
      } catch (error) {
        console.log("Se ha producido un error: " + error.message);
      }
      break;
    case 5:
      try {
        throw new SyntaxError("Error de sintaxis");
      } catch (error) {
        console.log("Se ha producido un error: " + error.message);
      }
      break;
    case 6:
      try {
        throw new URIError("URI malformado");
      } catch (error) {
        console.log("Se ha producido un error: " + error.message);
      }
      break;
    case 7:
      try {
        throw new EvalError("Error en función eval");
      } catch (error) {
        console.log("Se ha producido un error: " + error.message);
      }
      break;
    default:
      console.log("Opción inválida");
  }
}

// Ejemplo: Lanzar error para la opción 3
lanzarError(3);
