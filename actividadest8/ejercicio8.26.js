import Geo from "./modulos/ejercicio26.js";

// solicita permisos de geolocalización
Geo.askPermissions()
  .then((message) => {
    console.log(message);
    // obtener longitud
    Geo.getLongitude()
      .then((longitude) => {
        console.log("Longitud:", longitude);
      })
      .catch((error) => {
        console.error(error);
      });

    // obtener latitud
    Geo.getLatitude()
      .then((latitude) => {
        console.log("Latitud:", latitude);
      })
      .catch((error) => {
        console.error(error);
      });

    // obtener altitud
    Geo.getAltitude()
      .then((altitude) => {
        console.log("Altitud:", altitude);
      })
      .catch((error) => {
        console.error(error);
      });
  })
  .catch((error) => {
    console.error(error);
  });
