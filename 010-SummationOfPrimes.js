function isPrime(n) {
    if (n ===  1){
        return false;
    } else if(n < 4) {
        return true;
    } else if(n % 2 === 0) {
        return false;
    } else if (n < 9) {
        return true;
    } else if(n % 3 === 0 ){
        return false;
    } else {
        var r = Math.round(Math.sqrt(n)),
            f = 5;
        while (f <= r){
            if(n % f === 0){
                return false;
            }
            if(n % (f + 2) === 0) {
                return false;
            }
            f += 6;
        }
        return true;
    }
}

var ceil = 2000000,
    sum = 0,
    i = 0;

for (i; i < ceil; i++){
    if (isPrime(i)){
        sum += i;
    }
}

console.log("The Sum of primes under 2M is = " + sum);
