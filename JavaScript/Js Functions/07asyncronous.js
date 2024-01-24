// doing one thing at a time, doing one by one sequentially only one thing happening at a time is synchronous
// multiple things are context switching with each other and can parallalize the tasks by assigg the tasks to others

/* 
Java script is single threaded but context switching is possible using asyncronous functions
*/

function findSum(n){
    let ans = 0;
    for(let i=0; i<n; i++){
        ans += i;
    }
    return ans;
}

function findSumTill1000(){
    console.log(findSum(1000));
}

//busy waiting 
function syncSleep(){
    let a = 1;
    for(let i = 0; i<100000000; i++){
        a++;
    }
}
syncSleep();
setTimeout(findSumTill1000, 1000)
console.log("Hellow world");