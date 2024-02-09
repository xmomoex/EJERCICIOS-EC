// Función para crear una baraja de cartas
function crearBaraja() {
  const palos = ["Corazones", "Diamantes", "Tréboles", "Picas"];
  const valores = [
    "As",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "Sota",
    "Caballo",
    "Rey",
  ];
  const baraja = [];
  for (let palo of palos) {
    for (let valor of valores) {
      let puntaje = parseInt(valor) || (valor !== "As" ? 0.5 : 1); // As vale 1 u 11
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

// Función para calcular el valor total de la mano
function calcularValorTotal(mano) {
  let valorTotal = 0;
  let ases = 0;
  for (let carta of mano) {
    valorTotal += carta.puntaje;
    if (carta.valor === "As") {
      ases++;
    }
  }
  // Ajustar el valor de los ases si es necesario
  while (ases > 0 && valorTotal > 7.5) {
    valorTotal -= 0.5;
    ases--;
  }
  return valorTotal;
}

// Función para jugar al 7 y Medio
function jugar7yMedio() {
  const baraja = barajar(crearBaraja());
  const jugador = [];
  const dealer = [];

  // Inicialmente se reparten 2 cartas a cada jugador
  for (let i = 0; i < 2; i++) {
    jugador.push(baraja.pop());
    dealer.push(baraja.pop());
  }

  let continuar = true;

  while (continuar) {
    // Mostrar las cartas del jugador y del dealer
    console.log("Tu mano:", jugador);
    console.log("Carta del dealer:", dealer[0]);

    // Preguntar al jugador si desea otra carta
    let otraCarta = confirm("¿Quieres otra carta?");
    if (otraCarta) {
      jugador.push(baraja.pop());
    } else {
      continuar = false;
    }

    // Calcular los valores totales
    const valorJugador = calcularValorTotal(jugador);
    const valorDealer = calcularValorTotal(dealer);

    // Verificar si el jugador se ha pasado de 7.5
    if (valorJugador > 7.5) {
      console.log("Te has pasado de 7.5. Has perdido.");
      return;
    }

    // Verificar si el jugador ha decidido no tomar más cartas
    if (!continuar) {
      // El dealer toma cartas hasta que su mano sume 5.5 o más
      while (valorDealer < 5.5) {
        dealer.push(baraja.pop());
        valorDealer = calcularValorTotal(dealer);
      }

      // Mostrar las manos finales
      console.log("Tu mano:", jugador);
      console.log("Mano del dealer:", dealer);

      // Determinar el resultado del juego
      if (valorDealer > 7.5 || valorJugador > valorDealer) {
        console.log("¡Has ganado!");
      } else if (valorDealer === valorJugador) {
        console.log("Empate. El dealer gana.");
      } else {
        console.log("El dealer gana.");
      }
    }
  }
}

// Ejecutar el juego
jugar7yMedio();
