var numero = parseInt(prompt("Introduce un número del 1 al 10"));
var start = 0;

while (start <= 10) {
    console.log(numero + " x " + start + " = " + numero*start);
    start++;
}

var num2 = 1;
var num3 = 1;

console.log("Los números divisibles por 2 son: ");

while(num2 <= 100) {
    if (num2 % 2 === 0) {
        console.log(num2);
    }
    num2++;
}

console.log("Los números divisibles por 3 son: ");

while(num3 <= 100) {
    if (num3 % 3 === 0) {
        console.log(num3);
    }
    num3++;
}