import { preguntarEdad, nacimiento } from "./primero.js";

// Método para verificar si la persona nació antes del año 2006
function comprobarNac() {
  try {
    const edad = preguntarEdad();
    if (edad === null) {
      throw new Error("La edad no se ha podido obtener");
    }
    const anioNac = nacimiento(edad);
    const nacAntes06 = anioNac < 2006;
    return nacAntes06;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

// Llamada al método para verificar el nacimiento
const resultado = comprobarNac();

// Mensaje de finalización del programa
if (resultado !== null) {
  if (resultado) {
    console.log("Eres mayor de edad");
  } else {
    console.log(
      "Eres menor de edad o tienes 18 y has nacido antes del año 2006"
    );
  }
  console.log("El programa ha terminado.");
}
