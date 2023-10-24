//primero hacemos que inserte la cadena
let cadena = "Escribe una cadena de texto";
let cadenamen = prompt(cadena);

num = cadenamen.indexOf(" ");
cadena1 = cadenamen[0].toUpperCase()+ cadenamen.substring(1,num+1);
document.write(cadena1);

num = cadenamen.indexOf(" ");
cadenamen = cadenamen[num + 1].toUpperCase() + cadenamen.substring(num + 2);
document.write(cadenamen);

num = cadenamen.indexOf(" ");
cadenamen = cadenamen[num + 1].toUpperCase() + cadenamen.substring(num + 2);
document.write(cadenamen);

