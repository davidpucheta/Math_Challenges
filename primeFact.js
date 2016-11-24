var n = 600851475143,
    lastFactor = 0,
    factor = 0,
    maxFactor = 0;

//2 es el unico num primo par
if (n % 2 === 0){ //Si el numero es divisible entre 2
    lastFactor = 2; //el ultimo factor es 2
    n = n / 2; // y n es igual a n / 2

    while(n / 2 === 0) {
        n = n / 2;
    }
} else { //si no el ultimo factor es 1 (todo numero entre 1 es factor)
    lastFactor = 1;
}

//Si factor es 3
factor = 3;
//Y el factor maximo es sqrt(n)
maxFactor = Math.round(Math.sqrt(n));

//mientras n > 1 y el factor no pase el maxFactor
while (n > 1 && factor <= maxFactor){
    if (n % factor === 0) {
        n = n / factor;
        lastFactor = factor;

        while (n % factor === 0){
            n = n / factor;
        }
        maxFactor = Math.round(Math.sqrt(n));
    }
    factor = factor + 2;
}

if (n === 1) {
    console.log(lastFactor);
} else {
    console.log(n);
}
