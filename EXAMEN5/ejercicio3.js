// Función para precalentar el horno de forma asincrónica
function precalentar(temperatura) {
  return new Promise((resolve, reject) => {
    const tiempo = Math.ceil(temperatura / 50) * 3;
    setTimeout(() => {
      console.log(`Terminado de precanlentarse el horno a ${temperatura}°C`);
      resolve();
    }, tiempo * 1000); // Convertir minutos a milisegundos
  });
}

// Función para elegir los ingredientes de la pizza de forma sincrónica
function introducirIngredientes() {
  const ingredientes = prompt(
    "Inserte los ingredientes separados por comas: "
  ).split(",");
  const tiempoHorneado = 5; // Tiempo para hornear a 150°C

  const pizza = {
    ingredientes,
    tiempoHorneado,
  };

  console.log("Ingredientes:", pizza);
  return pizza;
}

// Función para hornear la pizza de forma asincrónica
function hornearPizza(pizza) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`La pizza esta lista`);
      resolve();
    }, pizza.tiempoHorneado * 60 * 1000); // Convertir minutos a milisegundos
  });
}

// Simulación de todo el proceso
async function hacerPizza() {
  console.log("Comenzando a hacer una pizza");
  console.log("Precalentamos el horno.");
  console.log("Elegimos los ingredientes.");
  const pizza = introducirIngredientes();
  console.log("Preparamos la pizza");
  await precalentar(250);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Horneamos la pizza.");
  await hornearPizza(pizza);
  console.log("Sacamos la pizza del horno");
}

hacerPizza();
