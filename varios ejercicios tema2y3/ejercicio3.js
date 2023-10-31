function eliminarDuplicados(array) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        if (resultado.indexOf(array[i])==-1) {
            resultado.push(array[i]);
        }
    }
    document.write(resultado);
}
eliminarDuplicados([2,3,4,5,6,7,8,2,5,4,5,6,7,4,5,6,7]);