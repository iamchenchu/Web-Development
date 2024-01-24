// the function which don't have any name is called anonymous function 
// we can call the function without using the name of the function and we will just use the function keyword

function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}

function sumOfSomething(a, b, fn) {
    const val1 = fn(a);
    const val2 = fn(b);
    return val1 + val2;
}

// calling with the anonymous function
const ans = sumOfSomething(3, 4, function(a) {
    return a * a;
});

console.log(ans);