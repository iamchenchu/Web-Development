// 
const fs = require('fs');

//my own asynchronous function
function kiratsReadFile(){
    return new Promise(function(resolve){
        fs.readFile("/Users/mekalathuruchenchaiah/Desktop/PROGRAMMING/Web Development/JavaScript/a.txt", "utf-8", function(err, data){
            resolve(data);
        });

    });
} 

//callback function to call
function onDone(data){
    console.log(data)
}

kiratsReadFile().then(onDone);