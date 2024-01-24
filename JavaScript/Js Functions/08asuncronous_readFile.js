//file system module 
const fs = require("fs")

fs.readFile("/Users/mekalathuruchenchaiah/Desktop/PROGRAMMING/Web Development/JavaScript/a.txt", "utf-8", function(err, data){
    console.log(data);
})

console.log("Hi there");
let a=0;

// takes very long, longer than the file read
for(let i=0; i<1000000000; i++){
    a++;
}
console.log("Hi there 2")