let cristales = [30,50,70,40];
for (let i=0; i<cristales.length; i++){
    console.log("Posicion:", i);
    console.log("cristal:", cristales[i]);
}



let crstales = [30,50,70,40];
let posicion = 2;
let nuevaEnergia = 100;
    console.log("posicion",i);
    console.log("Cristal:", cristales[i]);
    if posicion >=0 && posicion < cristales.length) {
        cristales[posicion] = nuevaEnergia;
    } else {
        console.log("Posicion no vàlida")

}



let personajes = [ {
    id: 1, nombre: "Rick", energia:99, edad:70},
    {id: 2, nombre: "Morty", energia:80, edad:14},
    {id:3, nombre: "Erick", energia:70, edad: 52},
];
for (let personaje of personajes){
    console.log("ID:", personaje.id);
    console.log("Nombre:", personaje.nombre);
    console.log("Energia:", personaje.energia);
    console.log("Edad:", personaje.edad);
} 

console.log =("Rick organiza sus misiones");
misiones = [{
    piloto: "Rick",
    cristales : [30,50,60]},

      
    {piloto: "Morty",  
    cristales: [20,40,50]},

    {piloto: "Summer",
    cristales: [10,20,30]}
];

for(let mision of misiones){
    totalCristales = 0;
    console.log("Piloto:", mision.piloto);
    for (let cristal of mision.cristales){
        totalCristales += cristal;
    }
    console.log("Total de cristales recolectados:", totalCristales);
}