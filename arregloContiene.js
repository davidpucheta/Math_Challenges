/*Instrucciones
Escribe una función o método que detecte si en un arreglo un número se repite, al menos, 
cierta cantidad de veces. La función debe recibir el arreglo, 
el número que se quiere detectar y la cantidad de veces mínimas que debe aparecer.
*/

function contiene(arr, n, r){
   var filtrados =  arr.filter(function(elemento){
       return elemento = n;
   });

   return filtrados.length === r ? true : false;

}