/*/le pedimos que inserte el número
let mensaje = "inserta un numero impar";
//lo guardamos 
let num = prompt(mensaje);

for (i=0;i<num;i++){
    for (j=0;j<num;j++){
        if(i==j){
            document.write("x");
        }
        else{
            document.write(" ");
        }
    }
    
    
}*/
// Pide al usuario un número impar
let numero = parseInt(prompt("Por favor, ingrese un número impar:"));

// Verifica si el número es impar
if (numero % 2 === 0) {
    alert("El número ingresado no es impar. Por favor, ingrese un número impar.");
} else {
    // Crea el patrón de X
    let output = '';
    for (let i = 0; i < numero; i++) {
        for (let j = 0; j < numero; j++) {
            if (i === j || j === numero - 1 - i) {
                output += 'X';
            } else {
                output += ' ';
            }
        }
        output += '\n';
    }
    // Pinta el patrón de X en la consola
    console.log(output);
}





