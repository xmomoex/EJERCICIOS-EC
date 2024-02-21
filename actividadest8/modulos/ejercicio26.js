const GeoLocalizacion = {
  // Función para solicitar permisos de geolocalización
  askPermissions: function () {
    return new Promise((resolve, reject) => {
      if ("permissions" in navigator) {
        navigator.permissions
          .query({ name: "geolocation" })
          .then((result) => {
            if (result.state === "granted") {
              resolve("Permisos de geolocalización obtenidos.");
            } else {
              reject("Permiso de geolocalización denegado.");
            }
          })
          .catch((error) => {
            reject(
              "Error al solicitar permisos de geolocalización: " + error.message
            );
          });
      } else {
        reject("El navegador no admite la API Permissions");
      }
    });
  },

  // Función para obtener la longitud
  getLongitude: function () {
    return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve(position.coords.longitude);
          },
          (error) => {
            reject("Error al obtener la longitud: " + error.message);
          }
        );
      } else {
        reject("Geolocalización no soportada en este navegador.");
      }
    });
  },

  // Función para obtener la latitud
  getLatitude: function () {
    return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve(position.coords.latitude);
          },
          (error) => {
            reject("Error al obtener la latitud: " + error.message);
          }
        );
      } else {
        reject("Geolocalización no soportada en este navegador.");
      }
    });
  },

  // Función para obtener la altitud
  getAltitude: function () {
    return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve(position.coords.altitude);
          },
          (error) => {
            reject("Error al obtener la altitud: " + error.message);
          }
        );
      } else {
        reject("Geolocalización no soportada en este navegador.");
      }
    });
  },
};

export default GeoLocalizacion;
