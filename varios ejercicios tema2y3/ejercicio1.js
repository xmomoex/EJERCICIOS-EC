let fibonacciant = 0;
let fibonacci=1;
let tercero;
document.write(0+", ");
document.write(1+", ");
for (i =0 ; i <= 999999; i++){
    tercero = fibonacci;
    fibonacci= fibonacciant+fibonacci;
    fibonacciant = tercero;
    document.write(fibonacci+", ");
}