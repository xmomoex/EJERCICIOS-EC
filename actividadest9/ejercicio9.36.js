// obtenemos los datos de una API
async function obtenerDatos() {
  try {
    const response = await fetch("https://api.mercadolibre.com/sites/MLA/");
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

//  mostramos los datos obtenidos
function mostrarDatos(data) {
  if (!data) {
    console.log("No se pudieron obtener los datos");
    return;
  }
  console.log("Datos obtenidos:", data);
}

//iniciar el programa
async function main() {
  console.log("programa iniciado");
  const data = await obtenerDatos();
  mostrarDatos(data);
  console.log("programa terminado");
}

main();
