var result = [],
    salida = 0,
    a = 0,
    b = 0,
    multiplo = false;
        
for (var i = 1; i < 1000; i++){
        
        a = i % 3;
        b = i % 5;
        
        
        if (a === 0){
            multiplo = true;
        } 
        else if (b === 0){
            multiplo = true;
        }
        
        if (multiplo){
          result.push(i);
          multiplo = false;
        }
        
}
    
for (var i = 0; i < result.length; i++) {
   salida += result[i];
}
   
   console.log("La suma de los multiplos de 3 o 5 es: " + salida);