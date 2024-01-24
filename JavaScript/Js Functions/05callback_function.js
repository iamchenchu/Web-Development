// in this code we are using the function callback in the javascript 
// we are calling the function in the argument which is called function callback 

function square(n){
    return n*n;
}
function qube(n){
    return n*n*n;
}

function sumOfSomething(a, b, fn){
    const val1 = fn(a);
    const  val2 = fn(b);
    return val1 + val2 ;
}
const ans = sumOfSomething(12, 13, square)
console.log("Total sum is : ", ans)

const ansqubes = sumOfSomething(12, 13, qube)
console.log("Total sum is : ", ansqubes)
