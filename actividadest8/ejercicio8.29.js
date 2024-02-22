let coche = {
  marca: "Seat",
  modelo: "Leon",
  numero_bastidor: "1224512",
  cilindrada: "120cc",
  numero_puertas: 4,
  color: "Azul",
  propietario: {
    nombre: "Pepe",
    apellidos: "Fernández",
    direccion: "Calle Liebre",
    telefono: "222222222",
    correo: "pepe@gmail.com",
  },
};

//almacenamos los datos en localStorage
localStorage.setItem("", JSON.stringify());

//leemos los datos de localStorage y los mostramos en la página
let stored = JSON.parse(localStorage.getItem(""));
let contenedor = document.getElementById("datos");
let html = "<p><strong>Marca:</strong> " + stored.marca + "</p>";
html += "<p><strong>Modelo:</strong> " + stored.modelo + "</p>";
html +=
  "<p><strong>Número de bastidor:</strong> " + stored.numero_bastidor + "</p>";
html += "<p><strong>Cilindrada:</strong> " + stored.cilindrada + "</p>";
html +=
  "<p><strong>Número de puertas:</strong> " + stored.numero_puertas + "</p>";
html += "<p><strong>Color:</strong> " + stored.color + "</p>";
html += "<h2>Datos del propietario</h2>";
html += "<p><strong>Nombre:</strong> " + stored.propietario.nombre + "</p>";
html +=
  "<p><strong>Apellidos:</strong> " + stored.propietario.apellidos + "</p>";
html +=
  "<p><strong>Dirección:</strong> " + stored.propietario.direccion + "</p>";
html += "<p><strong>Teléfono:</strong> " + stored.propietario.telefono + "</p>";
html += "<p><strong>Correo:</strong> " + stored.propietario.correo + "</p>";
contenedor.innerHTML = html;

//Este window limpia con localStorage al cerrar la ventana del navegador
window.addEventListener("beforeunload", function () {
  localStorage.removeItem("");
});
