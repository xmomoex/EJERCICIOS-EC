let codPostal = new Map([
    [45005, "Abedul"],
    [49014, "Aire"],
    [37003, "Alarcos"],
    [11011, "Algeciras"],
    [11500, "Puerto de Santa María"]
])
//le decimos que inserte la opcion
let opcion = 1;



    while (opcion >0 && opcion <6) {
        opcion = prompt("Inserte la opción: 1 buscar cod postal, 2 eliminar cod postal, 3 listar cod postal, 4 modificar cod postal, 5 salir ");
    

    switch (opcion) {
        case "1":
            //le pedimos que inserte el codigo postal que busca
            let codBuscado = prompt("Inserte el código postal que busca");
            let encontrado = false;
            for (let [codigo, nombre] of codPostal) {
                if (codigo == codBuscado) {
                    document.write('El código ha sido encontrado');
                    encontrado = true;
                }
            }
            if (encontrado == false) {
                document.write("El código no ha sido encontrado");
            }
            break;

        case "2":
            //le pedimos que inserte el codigo postal que busca
            let codEliminar = prompt("Inserte el código postal que busca");
            let encontradoE = false;
            for (let [codigo, nombre] of codPostal) {
                if (codigo == codEliminar) {
                    codPostal.delete(codigo);
                    document.write('El código ha sido eliminado');
                    encontradoE = true;
                }
            }
            if (encontradoE == false) {
                document.write("El código no ha sido encontrado");
            }
            break;
        case "3":
            //le pedimos que inserte el codigo postal que busca
            for (nombre of codPostal) {
                document.write(nombre + "<br>");
            }
            break;
        case "4":
            let codModificar = prompt("Inserte el código postal que busca");
            encontradoM = false;
            for (let [codigo, nombre] of codPostal) {
                if (codigo == codModificar) {
                    codPostal.nombre = prompt("inserte el nuevo nombre del código")
                    encontradoM = true;
                }
            }
            if (encontradoM == false) {
                document.write("El código no ha sido encontrado");
            }
            break;
            
        case "5":
            document.write("fin del programa");
            opcion = -1;
            break;
    }}
