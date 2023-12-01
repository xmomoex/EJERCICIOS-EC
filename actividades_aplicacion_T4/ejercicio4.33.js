function noEspanol(frase) {
  //Pasamos la frase a minúsculas para ahorrar trabajo
  let fraseEnMinusculas = frase.toLowerCase();
  //Separamos la frase en un array por cada espacio
  let arrayEspañol = fraseEnMinusculas.split(" ");
  //Creamos un array para el abecedario español
  let abecedarioEspañol = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "ñ",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  // crea,os el array final
  let arrayNoEspañol = [];
  //recorremos el arrayEspañol
  for (let i = 0; i < arrayEspañol.length; i++) {
    let palabra = arrayEspañol[i];
    //Recorremos letra por letra en caso de que se trate de una frase
    for (let j = 0; j < palabra.length; j++) {
      let letra = palabra[j];
      //Si en el abecedario español esta el caracter y si es distinto a un espacio lo empujamos al arrayNoEspañol
      if (
        abecedarioEspañol.indexOf(letra) == -1 &&
        letra != " " &&
        letra != ""
      ) {
        arrayNoEspañol.push(letra);
      }
    }
  }

  console.log(
    `Caracteres que no están en el abecedario español:, ${arrayNoEspañol}`
  );
}

let frase = prompt("Escribe los caracteres separados por espacios");
noEspanol(frase);
