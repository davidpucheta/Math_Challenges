function esPalindromo(str){
        var revStr = str.split("").reverse().join(""); 
        return str === revStr ? true : false;
}