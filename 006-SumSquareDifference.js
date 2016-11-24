function calculateSquaresAndSum(n){
    var sumOfSquares = (2 * n + 1) * (n + 1) * n /6;
    var squareOfSums = Math.pow( (n * (n + 1) / 2), 2);
    return squareOfSums - sumOfSquares;
}

var result = calculateSquaresAndSum(100);

console.log("The difference betwwen sum of " +
            "squares and the square of the sum " +
            "of numbers from 1 to 100 is: " + result);
