var precioVenta;
var ventaTotal = 0;
var i = 1

var numVentas = parseInt(prompt("¿Cuántas ventas has realizado?"));

if (numVentas > 0) {
    while(i <= numVentas) {
        precioVenta = parseInt(prompt("Introduce el valor de la venta " + i));
        ventaTotal += precioVenta;
        i++;
    }
}

console.log("Has realizado " + numVentas + " ventas por un valor total de " + ventaTotal + "€");