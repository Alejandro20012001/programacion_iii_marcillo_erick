const prompt = require("prompt-sync")();
console.log("condicional if");
let energia = Number(prompt("Rick, ¿Cuànta energia tienes?"));
console.log("Condicional simple if");
if (energia > 0) {
    console.log(
        "Tienes energia suficiente para continuar la aventura"
    );
}

console.log("Condicional If-Else Dos Caminos");
let combustible = Number(prompt("Rick, ¿cuánto combustible tienes?"));
if (combustible > 0) {
    console.log("Tienes combustible suficiente para continuar la aventura.")
} else {
    console.log("No tienes combustible suficiente para continuar la aventura")
}

console.log("Condicional If-Else If Múltiples Caminos");
let dimension = prompt("Rick, ¿en qué dimensión estás?");
if (dimension === "C-137") {
    console.log("Estás en tu dimensión original.");
} else if (dimension === "C-148") {
    console.log("Estás en una dimensión alternativa.");
} else {
    console.log("Estás en una dimensión desconocida.");
}


console.log("Condicionlal if anidado");
let energia2=50;
let combustible2= 400;

if (energia2 > 0) {
    if(combustible2 > 0){
        console.log("Tienes energia y combustible suficiente para continuar la aventura")
    } else {
        console.log("Tienes energia,pero no tienes combustible sufuciente")
    }
}

console.log("Condicional If con Operadores Lógicos");
let energia3 = 50;
let combustible3 = 400;

if (energia3 > 0 && combustible3 > 0) {
    console.log("Tienes energia y combustible suficiente para continuar");
} else {
    console.log("No tienes suficiente energia o combustible para continuar");
}

console.log("Control de viajes interdimensionales");
let combustible4 = 400;
let energia4 = 50;
let rick_disponible = "si";
let summer_disponible = "no";
let nave_averiada = "no";


if (combustible4>=50 &&
   energia4>=50 &&
   rick_disponible==="si" &&
   summer_disponible==="si" &&
   (nave_averiada==="si"))
{
    console.log("Viaje Autorizado.");
} else {
    if (combustible4<50)
    {
        console.log("No puedes viajar a otra dimensión, no tienes suficiente combustible.");
    }
    if (energia4<50)
    {
        console.log("No puedes viajar a otra dimensión, no tienes suficiente energia.");
    }
    if (rick_disponible==="no")
    {
        console.log("No puedes viajar a otra dimensión, Rick no está disponible.");
    }
    if (summer_disponible==="no")
    {
        console.log("No puedes viajar a otra dimensión, summer no está disponible.");
    }
    if (nave_averiada==="si")
    {
        console.log("No puedes viajar a otra dimensión, la nave esta averiada.");
    }
}



console.log("Mision interdimensional ");
let cristalesObjetivos=200;
let cristalesRecolectados=150;
let combustibleInicial=1000;
let combustibleConsumido=850;
let mortyHerido="si";
let naveAveriada="no";
let bonificacion=0;
let porcentajeCumplimiento=(cristalesRecolectados/cristalesObjetivos)*100;
let combustibleRestante=combustibleInicial-combustibleConsumido;

console.log("Resultados de la mision");
if(porcentajeCumplimiento>=90){
    console.log("Misiòn cumplida con exito");

} else if (porcentajeCumplimiento>=70 && porcentajeCumplimiento<90){
    console.log("Misión Cumplida Parcialmente");
} else if (porcentajeCumplimiento>=50 && porcentajeCumplimiento<70){
    console.log("Misión Regular, se requiere mejorar el desempeño");
} else {
    console.log("Misión Fallida y Peligro de Extinción");
} 


console.log("Evaluación de bonificación por desempeño");
if (porcentajeCumplimiento>=90 && combustibleRestante>=200){
    bonificacion=1000;
    console.log("Bonificación otorgada por desempeño excelente.");
} else{
    console.log("No se otorga bonificación por desempeño.");
}


console.log("Regreso seguro a la dimensión original");
if (mortyHerido==="no" && naveAveriada==="no"){
    console.log("Regreso seguro a la dimensión original.");
} else if (mortyHerido==="si" && naveAveriada==="no"){
    console.log("Regreso a la dimensión original con precaución, Morty está herido.");
} else if (mortyHerido==="no" && naveAveriada==="si"){
    console.log("Regreso a la dimensión original con precaución, la nave está averiada.");
} else {
    console.log("Regreso a la dimensión original con precaución, Morty está herido y la nave está averiada.")
}


console.log("Resumen de la misión");
console.log("Cristales Objetivos:", cristalesObjetivos);
console.log("Cristales Recolectados:", cristalesRecolectados);
console.log("Porcentaje de Cumplimiento:", porcentajeCumplimiento.toFixed(2) + "%");
console.log("Combustible Inicial:", combustibleInicial);
console.log("Combustible Consumido:", combustibleConsumido);
console.log("Combustible Restante:", combustibleRestante);
console.log("Morty Herido:", mortyHerido);
console.log("Nave Averiada:", naveAveriada);
console.log("Bonificación Otorgada:", bonificacion);