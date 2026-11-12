let personajes = ["Rick", "Morty", "Jerry", "Marcillo", "Erick"];
console.log("Elemento 0", personajes[0]);
console.log("Elemento 2",personajes[2]);
console.log("Elemento 5",personajes[5]);
console.log("Elemento 4", personajes [4]);
console.log("Tamaño del arreglo", personajes.length);


console.log("Incluir elementos a un arreglo co push");
personajes.push("Marcillo");
personajes.push("Erick");
console.log("modificar elementos a un arreglo");
personajes[7]="Erick";
personajes[0]="Erick"
console.log("Personajes:", personajes);
console.log("Eliminar elementos de un arreglo:");
personajes.pop(); //Elimina el ultimo elemento del arreglo
console.log("Personajes:", personajes);
personajes.shift(); //Elimina el primer elemento del arreglo
console.log("Personajes:", personajes);
personajes.splice(2,1); //Elimina el elemento en la posicion 2
console.log("Personajes:", personajes);