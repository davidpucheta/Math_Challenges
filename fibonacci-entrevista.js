//Code challenge para entrevista del 22 de Dic de 2016

function getN(n) {

    var index = 0;
    
    var arr = [];
     arr[0] = 0;
     arr[1] = 1;

    for(var i = 2; i <= n; i++){
        
        arr[i] = arr[i-1] + arr[i-2];
        }

        console.log("El número en la posición " + n + " es: " + arr[arr.length-2]);
}
getN(9);