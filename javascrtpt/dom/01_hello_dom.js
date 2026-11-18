console.log(document);
const titulo = document.getElementById("titulo");
console.log(titulo);
titulo.textContent = "Laboratorio Interdimensional";




const boton = document.getElementById("botonPortal");
const estado = document.getElementById("estado");

boton.addEventListener("click", function () {
    console.log("Ejecutando Click");
    estado.textContent = "Portal Activado";
    estado.textContent = "Texto cambiado en el elemento estado";
    alert("Proceso completado");
});


const mensaje = document.getElementById("mensaje");
const botonMensaje = document.getElementById("botonMensaje");
botonMensaje.addEventListener("click", function () {
    mensaje.textContent = "Morty listo para la aventura";
    
});


const contador = document.getElementById("contador");
const botonContador = document.getElementById("botonContador");
botonContador.addEventListener("click", function () {
    let valor = parseInt(contador.textContent);
    contador.textContent = valor + 1;
});
