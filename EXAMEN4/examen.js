//creo las variables
let baraja = [];
let cartasRestantes = [];
let puntajeJugador = 0;
let puntajeBanca = 0;

//creo la baraja con esta funcion
function crearBaraja() {
  const palos = ["Corazones", "Diamantes", "Tréboles", "Picas"];
  const valores = ["1", "2", "3", "4", "5", "6", "7", "Sota", "Caballo", "Rey"];
  for (let palo of palos) {
    for (let valor of valores) {
      let puntaje = parseInt(valor) || (valor !== "As" ? 0.5 : 1);
      baraja.push({ valor, palo, puntaje });
    }
  }
  cartasRestantes = [...baraja];
}

//uso esta funcion para barajar las cartas
function barajar() {
  for (let i = baraja.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [baraja[i], baraja[j]] = [baraja[j], baraja[i]];
  }
}

//esta funcione es para obtener las cartas aleatoriamente
function obtenerCartaAleatoria() {
  const indice = Math.floor(Math.random() * cartasRestantes.length);
  const carta = cartasRestantes.splice(indice, 1)[0];
  return carta;
}

//funcion para momstrar la carta dependiendo si es la banca o el jugador
function mostrarCarta(carta, jugador) {
  let divJugador = document.getElementById(
    jugador === "jugador" ? "cartasJugador" : "cartasBanca"
  );
  let nuevaCarta = document.createElement("div");
  nuevaCarta.textContent = `${carta.valor} de ${carta.palo}`;
  divJugador.appendChild(nuevaCarta);
}

//esta funcion clacula la puntuacion de la mano
function calcularPuntuacion(mano) {
  let puntuacion = 0;
  for (let carta of mano) {
    puntuacion += carta.puntaje;
  }
  return puntuacion;
}

//esta funcion es para sacar el mensaje que se le envie en el id mensaje
function mostrarMensaje(mensaje) {
  document.getElementById("mensaje").textContent = mensaje;
}

//funcion para pedir la carta
function pedirCarta() {
  const carta = obtenerCartaAleatoria();
  mostrarCarta(carta, "jugador");

  puntajeJugador += carta.puntaje;
  document.getElementById("puntuacionJugador").textContent = puntajeJugador;

  if (puntajeJugador >= 7.5) {
    mostrarMensaje("¡Has alcanzado o superado 7.5!");
    document.getElementById("nuevaCarta").disabled = true;
    document.getElementById("plantarse").disabled = true;
  }
}

//esta funcion juega la banca
function jugarBanca() {
  while (puntajeBanca <= puntajeJugador && puntajeBanca <= 7.5) {
    const carta = obtenerCartaAleatoria();
    mostrarCarta(carta, "banca");

    puntajeBanca += carta.puntaje;
    document.getElementById("puntuacionBanca").textContent = puntajeBanca;
  }

  if (puntajeBanca > 7.5) {
    mostrarMensaje("¡La banca se ha pasado de 7.5! ¡Has ganado!");
    establecerCookie("ganado");
  } else {
    mostrarMensaje("¡La banca ha ganado!");
    establecerCookie("perdido");
  }
  document.getElementById("nuevaCarta").disabled = true;
  document.getElementById("plantarse").disabled = true;
}

//cuando se planta se ejecuta la funcion jugar banca
function plantarse() {
  jugarBanca();
}

//añado los events listener de los botones
document.getElementById("nuevaCarta").addEventListener("dblclick", pedirCarta);
document.getElementById("plantarse").addEventListener("click", plantarse);

//añado el event listener de la f
document.addEventListener("keydown", function (event) {
  if (event.key === "f") {
    location.reload();
  }
});

//creo la funcin de las cookies
function establecerCookie(resultado) {
  //establezco que expire en 5 min
  const fechaExpiracion = new Date();
  fechaExpiracion.setTime(fechaExpiracion.getTime() + 5 * 60 * 1000);

  //creo el valor de la cookie pondre ganado si gana el jugador y perdido si esque ha perdidio
  const valorCookie = `resultado=${resultado}; expires=${fechaExpiracion.toUTCString()}; path=/`;
  document.cookie = valorCookie;
}

//creo la bara y barajo para que pueda comenzar el juego
crearBaraja();
barajar();
