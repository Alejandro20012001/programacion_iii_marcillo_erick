const energia = document.getEelementById("energia");
const dimension = document.getElementById("dimension");
const portal = document.getElementById("portal");

energia.textContent= "Energia: 100%";
dimension.textContent= "Dimension: C-137";
portal.textContent= "Portal: Activado";

//Selecciòn a travès del nombre de la clase

const personaje = document.querySelector(".personaje");
personaje.textContent= "Rick C-137";

const h2Objeto = document.querySelectorAll("h2");
h2Objeto.textContent= "Preparando Nave";

const universo = document.querySelectorAll("#universo");
universo.textContent= "Preparando universo";

const estadoMorty = document.querySelector("#morty .estado");
estadoMorty.textContent= "Preparado para viajar";

const planetas = document.querySelectorAll(".planeta")
console.log(planetas);
console.log(planetas.length);


console.log(planetas[0].textContent);
console.log(planetas[1].textContent);
console.log(planetas[2].textContent);
console.log(planetas[3].textContent);
console.log(planetas[4].textContent);
console.log(planetas[5].textContent);


console.log("Con ForEach");
for (let planeta of planetas) {
    console.log(planeta.textContent);
}