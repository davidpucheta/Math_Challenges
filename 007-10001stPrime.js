/* By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
// we can see that the 6th prime is 13.
// What is the 10 001st prime number?
*/

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

var i = 2,
    count = 0,
    lastPrime = 0,
    limit = 10001;

while (count < limit) {
    if(isPrime(i)){
        lastPrime = i;
        count++;
    }
    i++;
}

console.log("The number " + lastPrime + " is the " + count + "th prime number.");
