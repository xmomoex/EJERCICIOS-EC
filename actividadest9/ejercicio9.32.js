document.addEventListener("DOMContentLoaded", () => {
  // función para hacer una solicitud a la API de Star Wars
  function obtenerInformacion(url) {
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }

  // URLs de las solicitudes a la API
  const urls = [
    "https://swapi.dev/api/people/1/",
    "https://swapi.dev/api/planets/1/",
    "https://swapi.dev/api/starships/2/",
  ];

  // realizamos las tres solicitudes a la vez
  Promise.all(urls.map((url) => obtenerInformacion(url)))
    .then((results) => {
      const [personaje, planeta, nave] = results;

      // Mostrar la información en el HTML
      mostrarInformacion("personaje", personaje);
      mostrarInformacion("planeta", planeta);
      mostrarInformacion("nave", nave);
    })
    .catch((error) => console.log(error));

  // mostramos la informacion
  function mostrarInformacion(id, data) {
    const container = document.getElementById(id);
    const keys = Object.keys(data);

    const table = `
        <h2>${id.charAt(0).toUpperCase() + id.slice(1)}</h2>
        <table>
          ${keys
            .map(
              (key) =>
                `<tr><td>${key.replace("_", " ")}</td><td>${
                  data[key]
                }</td></tr>`
            )
            .join("")}
        </table>
      `;

    container.innerHTML = table;
  }
});
