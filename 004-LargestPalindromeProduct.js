var a,
    b,
    product = 0,
    productStraight = "",
    productReverse = "",
    largestProduct = 0,
    textProduct = "";


for (a = 999; a > 99; a-- ){
    for (b = 999; b > a; b--){
        product = a * b;
        productStraight = product.toString(10);
        productReverse = productStraight.split("").reverse().join("");

        if(product <= largestProduct){
            break;
        }

        if (productStraight === productReverse){
            if (product > largestProduct){
                largestProduct = product;
                textProduct = "The largest three digit product palindrome is " + a + " * " + b + " = " + product;
            }
        }
    }
}

console.log(largestProduct);
console.log(textProduct);
