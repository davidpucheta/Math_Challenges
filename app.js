/*AZ Test */

function totalScore(blocks, n)
{    
    var current = 0;
    var last = [0];
    var total = 0;
    
    for (var i = 0; i < n; i++){
        if (blocks[i] === 'X'){
            current = 2 * last[i-1];
            total += current;
        }    
        else if (blocks[i] === 'Z'){
            current = blocks[i -1];
            last[i] = last[i-1];
            total -= current;
        }
        else if (blocks[i] === '+'){
            current = last[i-1] + last[i-2];
            total += current;
        }
        else {
            current = blocks[i];
            total += current; 
        }
        
        if(blocks[i] !== 'Z')
            last.push(current);

    console.log(i + "==============")        
    console.log('l: ' +last[i]);
    console.log('c: ' + current);        
    console.log('t: ' + total);
    
    }

    console.log(last);    

    return console.log(total);
}

totalScore([5, -2, 4, 'Z', 'X', 9, '+', '+'], 8);

totalScore([1, 2, '+', 'Z'], 4);