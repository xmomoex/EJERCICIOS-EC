function crearBaraja() {
  const palos = ["Corazones", "Diamantes", "Tréboles", "Picas"];
  const valores = ["1", "2", "3", "4", "5", "6", "7", "Sota", "Caballo", "Rey"];
  const baraja = [];
  for (let palo of palos) {
    for (let valor of valores) {
      let puntaje = parseInt(valor) || (valor !== "As" ? 0.5 : 1);
      baraja.push({ valor, palo, puntaje });
    }
  }
  return baraja;
}

// Función para barajar la baraja
function barajar(baraja) {
  for (let i = baraja.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [baraja[i], baraja[j]] = [baraja[j], baraja[i]];
  }
  return baraja;
}

// Inicializar puntajes
let puntajeJugador = 0;
let puntajeBanca = 0;

// Obtener elementos del DOM
const cartasJugadorElement = document.getElementById("cartasJugador");
const cartasBancaElement = document.getElementById("cartasBanca");
const mensajeElement = document.getElementById("mensaje");

// Función para obtener una carta aleatoria
function obtenerCartaAleatoria() {
  const indice = Math.floor(Math.random() * cartasRestantes.length);
  const carta = cartasRestantes.splice(indice, 1)[0];
  return carta;
}

// Función para pedir una nueva carta al jugador
function pedirCarta() {
  const carta = obtenerCartaAleatoria();
  cartasJugadorElement.innerHTML += `<div>${carta}</div>`;

  // Determinar si la carta es un número o una figura
  if (!isNaN(carta)) {
    puntajeJugador += carta;
  } else if (carta !== "As") {
    puntajeJugador += 0.5;
  }

  // Verificar el puntaje del jugador
  if (puntajeJugador === 7.5) {
    mostrarMensaje("¡Has ganado con 7.5!");
    document.cookie = "resultado=ganado; max-age=300"; // 5 minutos
    return;
  } else if (puntajeJugador > 7.5) {
    mostrarMensaje("¡Te has pasado de 7.5! Has perdido.");
    document.cookie = "resultado=perdido; max-age=300"; // 5 minutos
    return;
  }
}

// Función para que la banca juegue
function jugarBanca() {
  while (
    (puntajeBanca < puntajeJugador && puntajeBanca <= 7.5) ||
    puntajeBanca === puntajeJugador
  ) {
    const carta = obtenerCartaAleatoria();
    cartasBancaElement.innerHTML += `<div>${carta}</div>`;

    // Determinar si la carta es un número o una figura
    if (!isNaN(carta)) {
      puntajeBanca += carta;
    } else if (carta !== "As") {
      puntajeBanca += 0.5;
    }
  }

  // Verificar el puntaje de la banca y determinar el resultado
  if (
    puntajeBanca > 7.5 ||
    (puntajeBanca < puntajeJugador && puntajeJugador <= 7.5)
  ) {
    mostrarMensaje("¡La banca se ha pasado de 7.5! Has ganado.");
    document.cookie = "resultado=ganado; max-age=300"; // 5 minutos
  } else if (puntajeBanca === puntajeJugador) {
    pedirCarta();
    return;
  } else {
    mostrarMensaje("¡La banca ha ganado!");
    document.cookie = "resultado=perdido; max-age=300"; // 5 minutos
  }
}

// Función para plantarse
function plantarse() {
  jugarBanca();
}

// Función para mostrar un mensaje en el elemento mensaje
function mostrarMensaje(mensaje) {
  mensajeElement.textContent = mensaje;
}

// Manejo de la tecla 'f' para recargar la página
document.addEventListener("keydown", function (event) {
  if (event.key === "f") {
    location.reload();
  }
});
// Obtener el botón de nueva carta
const botonNuevaCarta = document.getElementById("nueva-carta");

// Agregar un evento de doble clic al botón para solicitar una nueva carta
botonNuevaCarta.addEventListener("dblclick", function () {
  pedirCarta();
});

// Mostrar la primera carta al iniciar el juego
pedirCarta();
