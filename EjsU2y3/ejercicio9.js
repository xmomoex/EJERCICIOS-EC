//
let mensaje = "Escribe una cadena de texto";
let cadena =prompt(mensaje);
let palabras = cadena.split(' ');

for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];
    let palMayus = palabra[0].toUpperCase() + palabra.substring(1);
    document.write(palMayus + " ");
}
