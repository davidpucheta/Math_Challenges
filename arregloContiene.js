/*Instrucciones
Escribe una función o método que detecte si en un arreglo un número se repite, al menos, 
cierta cantidad de veces. La función debe recibir el arreglo, 
el número que se quiere detectar y la cantidad de veces mínimas que debe aparecer.
*/

function contiene(arr, n, r){
   var filtrados =  arr.filter(function(elemento){
       return elemento === n;
   });

   return filtrados.length === r ? true : false;

}


var arreglo = [4, 5, 2, 4, 5, 9, 9, 4, 4];  

console.log(contiene(arreglo, 4, 5) ); // Regresa false;
console.log(contiene(arreglo, 4, 4) ); // Regresa true; 
console.log(contiene(arreglo, 4, 3) );// Regresa true; 
console.log(contiene(arreglo, 9, 2) );// Regresa true;