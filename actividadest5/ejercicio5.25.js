const operarFechas = {
  difFechas(fecha1, fecha2) {
    //restamos las fechas y nos daría la diferencia en milisegundos
    let diferencia = fecha2 - fecha1;
    //lo transformamos a días
    let diferencia_de_días = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    //lo sacamos por pantalla
    return diferencia_de_días;
  },
  maxFecha(fecha1, fecha2) {
    let diferencia1 = Date() - fecha1;
    let diferencia2 = Date() - fecha2;
    if (diferencia1 < 0) {
      diferencia1 = diferencia1 * -1;
    }
    if (diferencia2 < 0) {
      diferencia2 = diferencia2 * -1;
    }
    if (diferencia1 == diferencia2) {
      return fecha1;
    } else {
      return fecha2;
    }
  },
  testFecha(fecha) {},
  ayerFecha(fecha) {
    // Restamos un día a la fecha
    return new Date(fecha.getTime() - 24 * 60 * 60 * 1000);
  },
  mañanaFecha(fecha) {
    // Sumamos un día a la fecha
    return new Date(fecha.getTime() + 24 * 60 * 60 * 1000);
  },
};

console.log(
  "Diferencia de fechas: " +
    operarFechas.difFechas(new Date("2023-10-10"), new Date("2023-10-15"))
);

console.log(
  operarFechas.maxFecha(new Date("2024-01-10"), new Date("2023-10-15"))
);

console.log(operarFechas.ayerFecha(new Date("2024-01-10")));
console.log(operarFechas.mañanaFecha(new Date("2024-01-10")));
