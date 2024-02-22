document.addEventListener("DOMContentLoaded", () => {
  const productGrid = document.getElementById("productGrid");

  fetch(
    "https://cors-anywhere.herokuapp.com/https://coffee.alexflipnote.dev/random",
    {
      method: "GET",
    }
  )
    .then((response) => response.text())
    .then((data) => {
      const imageURLs = data.split("\n");
      for (let i = 0; i < 9; i++) {
        const product = crearProducto(imageURLs[i]);
        productGrid.appendChild(product);
      }
    })
    .catch((error) =>
      console.error("Error al obtener imágenes de café:", error)
    );

  function crearProducto(imageUrl) {
    const product = document.createElement("div");
    product.classList.add("product");

    const img = document.createElement("img");
    img.src = imageUrl;
    product.appendChild(img);

    const name = document.createElement("h3");
    name.textContent = "Producto ";
    product.appendChild(name);

    const description = document.createElement("p");
    description.textContent = "Descripción ";
    product.appendChild(description);

    const price = document.createElement("p");
    price.textContent = "Precio: ";
    product.appendChild(price);

    return product;
  }
});
