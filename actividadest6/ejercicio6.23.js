function borrarCookies() {
  const cookies = document.cookie.split(";");
  const dominioActual = window.location.hostname;

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    const [nombre, valor] = cookie.split("=");

    // Verifica si la cookie es válida (no está vacía y no tiene una fecha de caducidad pasada)
    if (nombre && valor) {
      const cookieUrl = `http://${dominioActual}`;
      const cookieOpciones = { path: "/", expires: -1 };

      // Establece la cookie con una fecha de caducidad pasada para eliminarla
      document.cookie = `${nombre}=${valor};domain=${dominioActual};path=/;expires=${new Date(
        0
      ).toUTCString()}`;

      console.log(`Cookie eliminada: ${nombre}`);
    }
  }
}

setInterval(borrarCookies, 10000); // verifica cada 10 segundos (10000 ms)
