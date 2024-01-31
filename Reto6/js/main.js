
var precio = parseFloat(prompt("Introduce un precio"));
const IVA = 0.21;

var precioConIva = precio + (precio * IVA);

console.log("El precio con IVA es: ", precioConIva, "€");
