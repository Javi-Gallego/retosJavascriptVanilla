
var password = "novasaacertar";
var contrasenya;

for(let i = 1; i <= 3; i++) {
    contrasenya = (prompt("Introduce una contraseña")).toLowerCase();
    if(password === contrasenya) {
        console.log("¡Enhorabuena!");
        break;
    }
}