
var diaActual = prompt("¿Qué día es hoy?");

switch (diaActual) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log("Hoy es día laboral");
    break;

    case "sabado":
    case "domingo":
        console.log("Hoy es festivo");
    break;
}