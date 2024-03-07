import { useState } from "react";

const Main = () => {
  const [jugadores, setJugadores] = useState("");
  const [numEquipos, setNumEquipos] = useState(2); // Por defecto 2 equipos
  const [equipos, setEquipos] = useState([]);

  const handleInputChange = (event) => {
    setJugadores(event.target.value);
  };

  const handleNumEquiposChange = (event) => {
    setNumEquipos(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const jugadoresArray = jugadores
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    // Calcular cuántos jugadores debe tener cada equipo
    const jugadoresPorEquipo = Math.floor(jugadoresArray.length / numEquipos);

    // Mezclar aleatoriamente el array de jugadores
    const jugadoresMezclados = shuffleArray(jugadoresArray);

    // Repartir jugadores en equipos
    const equiposTemp = Array.from({ length: numEquipos }, () => []);

    let jugadorIndex = 0;
    for (let i = 0; i < numEquipos; i++) {
      for (let j = 0; j < jugadoresPorEquipo; j++) {
        if (jugadorIndex < jugadoresMezclados.length) {
          equiposTemp[i].push(jugadoresMezclados[jugadorIndex]);
          jugadorIndex++;
        }
      }
    }

    setEquipos(equiposTemp);
  };

  // Función para mezclar aleatoriamente un array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="fondo">
          <div className="texto">
            <h2>INTRODUCE LOS JUGADORES POR LINEAS</h2>
            <textarea
              name="jugadores"
              value={jugadores}
              onChange={handleInputChange}
              cols="50"
              rows="30"
            ></textarea>
          </div>
        </div>
        <div>
          <span>Selecciona el número de equipos:</span>
          {[2, 3, 4, 5, 6, 7, 8].map((num) => (
            <label key={num}>
              <input
                type="radio"
                name="numEquipos"
                value={num}
                checked={numEquipos === num}
                onChange={handleNumEquiposChange}
              />
              {num}
            </label>
          ))}
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>

      <div>
        {equipos.map((equipo, index) => (
          <div key={index}>
            <h3>Equipo {index + 1}</h3>
            <ul>
              {equipo.map((jugador, jugadorIndex) => (
                <li key={jugadorIndex}>{jugador}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
