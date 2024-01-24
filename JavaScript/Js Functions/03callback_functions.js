// calling one function inside another function is called function_callbacks
// below code is not a callback by the way, it's just having a helper function

// function to find the square
function square(n){
    return n*n
}

// function to find all of the sums
function sumOfSquares(a, b){
    const val1 = square(a);
    const val2 = square(b);

    return val1 + val2;
}

console.log(sumOfSquares(4,3))
