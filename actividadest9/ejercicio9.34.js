//funcion para introducir los datos
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("searchForm");
  const input = document.getElementById("searchInput");
  const resultsDiv = document.getElementById("results");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const buscador = input.value.trim();
    if (buscador === "") {
      alert("Por favor ingresa un término de búsqueda");
      return;
    }
    searchItems(buscador);
  });

  //funcion para buscar
  function searchItems(busqueda) {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        resultadosPantalla(data.results);
      })
      .catch((error) => {
        console.error("Error al buscar:", error);
        resultsDiv.innerHTML =
          "<p>Error al buscar. Por favor, intenta de nuevo más tarde.</p>";
      });
  }

  //funcion para sacar los resultados por pantalla
  function resultadosPantalla(items) {
    resultsDiv.innerHTML = "";
    if (items.length === 0) {
      resultsDiv.innerHTML = "<p>No se encontraron resultados</p>";
      return;
    }
    const slicedItems = items.slice(0, 3); // obtengo los tres primeros resultados
    const resultsHTML = slicedItems
      .map(
        (item) => `
        <div>
          <h3>${item.title}</h3>
          <p>Precio: $${item.price}</p>
          <p>Condición: ${item.condition}</p>
          <img src="${item.thumbnail}" alt="${item.title}">
          <p><a href="${item.permalink}" target="_blank">Ver en Mercado Libre</a></p>
        </div>
      `
      )
      .join("");
    resultsDiv.innerHTML = resultsHTML;
  }
});
