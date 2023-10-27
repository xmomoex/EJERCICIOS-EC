//creamos la funcion
function palabra_busqueda (cadena,busqueda){

    var palabras = cadena.split(' ');
    var cont = 0;
    for (let i = 0; i < palabras.length; i++) {
        var palabra = palabras[i];
        if (palabra == busqueda){
            cont++;
        }
    }

    document.write(busqueda + " se encontró "+ cont + " veces");
}


palabra_busqueda('juan el panca juan  frey juan ', 'juan');
