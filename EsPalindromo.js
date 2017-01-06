function esPalindromo(str){
        var revStr = str.replace(" ","").split("").reverse().join(""); 
        return str === revStr ? true : false;
}

esPalindromo("ana"); // true 
esPalindromo("mala"); // false 
esPalindromo("anita lava la tina"); // true 
esPalindromo("La ruta nos aporto otro paso natural"); // true