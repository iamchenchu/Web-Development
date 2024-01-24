function sumOfTotal(n){
    let ans =0;
    for(let i=1; i<=n; i++){
        ans = ans  + i;
    }
    return ans;
}
let sum = sumOfTotal(100)
let sum50 = sumOfTotal(50)
console.log("The total sum till 100 is ", sum)
console.log("The total sum till 100 is ", sum50)