
function calcularFibonacci(minNumber, maxNumber){
    var contador = 0;
    var fibonacci = 0;
    var result = [minNumber, minNumber + 1];

    while  (fibonacci < maxNumber ){
        fibonacci = result[contador] + result[contador + 1];
        result.push(fibonacci);  
        contador++;
    }
    
    return result;
    
}

function sumadorPares(arrFibonacci){
     var suma = 0;
    for (var i = 0; i < arrFibonacci.length; i++){
        if (arrFibonacci[i] % 2 === 0 ){
            suma += arrFibonacci[i];
        }
    }
    return suma;
}

var respuesta = calcularFibonacci(1,4000000);
var sumaDePares = sumadorPares(respuesta);
console.log(sumaDePares);

