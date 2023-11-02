function eliminarNoDuplicados(array) {
    let noduplicados = [];
    let duplicados = [];
    for (let i = 0; i < array.length; i++) {
        if (noduplicados.indexOf(array[i])==-1) {
            noduplicados.push(array[i]);
        }
        else{
            if (duplicados.indexOf(array[i])==-1) {
                duplicados.push(array[i]);
            }
            
        }
    }
    document.write(duplicados);
}
eliminarNoDuplicados([1,2,3,4,5,6,7,8,9,9,9,7,7,2,4,5]);