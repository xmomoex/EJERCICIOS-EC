//le pedimos al usuario que inserte la cadena
let mensaje = "inserte el argumento";
//guardamos la variable
let cadena = prompt(mensaje);
//creamos un for para que recorra la cadena
let mayuscula = false;
let minuscula = false;
for (i = 0; i <= cadena.length; i++) {
    if (cadena[i] == " ") {
        cadena = cadena.substring(0, i) + cadena.substring(i + 1)
    }
}
for (i=0; i<cadena.length;i++){
    if (cadena.substring(i, i + 1) == (cadena.substring(i, i + 1)).toUpperCase() ) {
        mayuscula = true;
    }
    if (cadena.substring(i, i + 1) == (cadena.substring(i, i + 1)).toLowerCase() ) {
        minuscula = true;
    }
}
if(mayuscula&&minuscula){
    document.write("El argumento tiene mayúsculas y minúsculas");
}
else if(mayuscula){
    document.write("El argumento tiene mayúsculas");
}
else{
    document.write("El argumento tiene minusculas");
}
