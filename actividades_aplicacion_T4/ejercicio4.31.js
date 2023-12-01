function operaciones() {
  let suma = 0;
  //recorremos el array de arguments
  for (let i = 0; i < arguments.length; i++) {
    //vamos sumando los elementos
    suma += arguments[i];
  }
  //calculamos media multiplicacion y division
  let media = suma / arguments.length;
  let multiplicacion = arguments[0] * arguments[arguments.length - 1];
  let division = arguments[1] / arguments[arguments.length - 2];
  document.write(
    `La suma es ${suma}<br>La media es ${media}<br>La multiplicación es ${multiplicacion}<br>La division es ${division}`
  );
}
