// pedimos la edad al usuario
export function preguntarEdad() {
  try {
    const edad = parseInt(prompt("Introduce tu edad:"));
    if (isNaN(edad) || edad < 0) {
      throw new Error("EDAD INTRODUCIDA NEGATIVA O MAL INTRODUCIDA");
    }
    return edad;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

// Método para calcular el año de nacimiento según la edad
export function nacimiento(edad) {
  const anioActual = new Date().getFullYear();
  return anioActual - edad;
}
