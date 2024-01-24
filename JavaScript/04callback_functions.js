// in the below code also we are repeating ourself in few blocks which is not a good practice 
// 

function square(n){
    return n * n
}
function qube(n){
    return n * n * n;
}

function sumOfSquares(a, b, c){
    const val1 = square(a);
    const val2 = square(b);
    const val3 = square(c);
    return val1 + val2 + val3;
}

function sumOfqubes(a, b, c){
    const val1 = qube(a);
    const val2 = qube(b);
    const val3 = qube(c);
    return val1 + val2 + val3;
}

console.log(sumOfSquares(2,3,5));
console.log(sumOfqubes(2,3,5));