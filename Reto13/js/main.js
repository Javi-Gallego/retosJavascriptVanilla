
var operando1 = parseFloat(prompt("Introduce el primer número"));
var operando2 = parseFloat(prompt("Introduce el segundo número"));
var operador = prompt("Introduce la operación a realizar");

switch (operador) {
    case "+":
        console.log(operando1 + " + " + operando2 + " = " + (operando1+operando2));
    break;
    case "-":
        console.log(operando1 + " - " + operando2 + " = " + (operando1-operando2));
    break;
    case "*":
        console.log(operando1 + " * " + operando2 + " = " + (operando1*operando2));
    break;
    case "/":
        console.log(operando1 + " / " + operando2 + " = " + (operando1/operando2));
    break;
    case "^":
        console.log(operando1 + " elevado a " + operando2 + " = " + (operando1**operando2));
    break;
    case "%":
        console.log("El módulo de " + operando1 + " / " + operando2 + " = " + (operando1%operando2));
    break;
    default:
        console.log("No has introducido una operación válida");
    break;
}