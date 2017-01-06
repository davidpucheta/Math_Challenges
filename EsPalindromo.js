function esPalindromo(str){
        str = str.replace(/\s/g,"").toLowerCase();
        var revStr = str.split("").reverse().join(""); 
        return str === revStr ? true : false;
}

console.log(esPalindromo("ana")); // true 
console.log(esPalindromo("mala")); // false 
console.log(esPalindromo("anita lava la tina")); // true 
console.log(esPalindromo("La ruta nos aporto otro paso natural")); // true