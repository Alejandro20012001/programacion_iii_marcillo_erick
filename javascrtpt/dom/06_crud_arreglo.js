let personajes = [
    {
        id: 1,
        nombre: "Rich Sanchez",
        dimension: "C-137",
        estado: "Vivo"
    },
    {
        id: 2,
        nombre: "Marty",
        dimension: "C-131",
        estado: "Muerto"
    },
    {
        id: 3,
        nombre: "Sunna",
        dimension: "C-500",
        estado: "Desconocido"
    },
];
 
let siguienteId = 4;
let idEditando = null;
 
const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const dimension = document.getElementById("dimension");
const estado = document.getElementById("estado");
const guardar = document.getElementById("guardar");
const cancelar = document.getElementById("cancelar");
 
const cantidad = document.getElementById("cantidad");
const contenedor = document.getElementById("contenedor");
console.log("mostrarPersonajes");
function mostrarPersonajes(){
    contenedor.replaceChildren();
    personajes.forEach(function(personaje){
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");
        const titulo = document.createElement("h3");
        titulo.textContent = personaje.nombre;
        const parrafoDimension = document.createElement("p");
        parrafoDimension.textContent = "Dimension: " + personaje.dimension;
        const parrafoEstado = document.createElement("p");
        parrafoEstado.textContent = "Estado: " + personaje.estado;
 
        const botonEditar = document.createElement("button");
        botonEditar.type = "button";
        botonEditar.textContent = "Editar";
        botonEditar.addEventListener("click", function(){
            editarPersonaje(personaje.id);
        });
 
        const botonEliminar = document.createElement("button");
        botonEliminar.type = "button";
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", function(){
            eliminarPersonaje(personaje.id);
        });
 
        tarjeta.append(titulo, parrafoDimension, parrafoEstado, botonEditar, botonEliminar);
        contenedor.appendChild(tarjeta);
    });
 
    cantidad.textContent = "Cantidad: " + personajes.length;
}
 
function editarPersonaje(id){
    const personaje = personajes.find(function(p){
        return p.id == id;
    });
    if (!personaje) {
        return;
    }
    idEditando = id;
    nombre.value = personaje.nombre;
    dimension.value = personaje.dimension;
    estado.value = personaje.estado;
    guardar.textContent = "Editar";
    cancelar.hidden = false;
}
 
function eliminarPersonaje(id){
    personajes = personajes.filter(function(p){
        return p.id != id;
    });
    if (idEditando == id) {
        limpiarFormulario();
    }
    mostrarPersonajes();
}
 
mostrarPersonajes();
cancelar.hidden = true;
 
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    const nombrePersonaje = nombre.value.trim();
    const dimensionPersonaje = dimension.value;
    const estadoPersonaje = estado.value;
 
    if (nombrePersonaje === "") {
        alert("El nombre es obligatorio");
        return;
    }
 
    if (idEditando === null) {
        const nuevoPersonaje = {
            id: siguienteId,
            nombre: nombrePersonaje,
            dimension: dimensionPersonaje,
            estado: estadoPersonaje,
        };
        personajes.push(nuevoPersonaje);
        siguienteId++;
    } else {
        const personaje = personajes.find(function(p){
            return p.id == idEditando
        })
        personaje.nombre = nombrePersonaje;
        personaje.dimension = dimensionPersonaje;
        personaje.estado = estadoPersonaje;
 
    }
 
    mostrarPersonajes();
    limpiarFormulario();
})
 
function limpiarFormulario(){
    formulario.reset();
    idEditando = null;
    guardar.textContent = "Agregar";
    cancelar.hidden = true;
}
 
cancelar.addEventListener("click", function () {
    limpiarFormulario()
});
 