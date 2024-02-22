// Función asíncrona para obtener datos de una API
async function obtenerDatos() {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    return null;
  }
}

// Función para mostrar los datos obtenidos
function mostrarDatos(data) {
  if (!data) {
    console.log("No se pudieron obtener los datos");
    return;
  }
  console.log("Datos obtenidos:", data);
  // Aquí puedes realizar cualquier acción con los datos, como mostrarlos en el DOM
}

// Función principal asincrónica para ejecutar el programa
async function main() {
  console.log("Iniciando programa...");
  const data = await obtenerDatos();
  mostrarDatos(data);
  console.log("Programa finalizado");
}

// Llamar a la función principal para ejecutar el programa
main();
