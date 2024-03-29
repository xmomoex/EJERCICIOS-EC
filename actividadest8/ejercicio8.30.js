// Función para mostrar una notificación
function showNotification() {
  const notification = new Notification("Hora de visitar nuestro sitio", {
    body: "Haz clic para visitar",
    icon: "https://example.com/icon.png", // Cambia esto por el ícono deseado
  });

  // Cierra la notificación después de 5 segundos
  setTimeout(() => {
    notification.close();
  }, 5000);

  // Al hacer clic en la notificación, abre el enlace y detiene las notificaciones futuras
  notification.onclick = function () {
    window.open("https://example.com", "_blank");
    clearInterval(notificationInterval);
  };
}

// Solicita permiso para mostrar notificaciones
if (Notification.permission === "default") {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      // Si se concede el permiso, comienza a mostrar notificaciones
      var notificationInterval = setInterval(showNotification, 30000);
    }
  });
} else if (Notification.permission === "granted") {
  // Si ya se había concedido el permiso, comienza a mostrar notificaciones directamente
  var notificationInterval = setInterval(showNotification, 30000);
}
