/*Instrucciones
Realiza una función que reciba un arreglo de enteros e indique 
si la suma de los números pares es igual a la de los números 
impares dentro del arreglo.  


EJEMPLO: 
sumasIguales( [ 10, 5, 5 ] ); // true 
sumasIguales( [ 2, 1, 1, -1, 3, 4, 10 ] ); // false 
sumasIguales( [ -4, 10, -6 ] ); // true 
sumasIguales( [ 1, 2, 3, 4, 1, 1 ] ); // true

*/

function sumaEsPar(arr){

    var pares = 0;
    var impares = 0;

    for (var i=0; i < arr.length; i++){
        if ( (arr[i] % 2) === 0){
            pares += arr[i];
         } else {
             impares += arr[i];
         }
    }

    return pares === impares ? true : false;
}

sumaEsPar( [ 10, 5, 5 ] ); // true 
sumaEsPar( [ 2, 1, 1, -1, 3, 4, 10 ] ); // false 
sumaEsPar( [ -4, 10, -6 ] ); // true 
sumaEsPar( [ 1, 2, 3, 4, 1, 1 ] ); // true