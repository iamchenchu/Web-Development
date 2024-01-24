const express = require("express");

const port = 3000
const app = express();

app.get('/', function(req, res){
    res.send('Hello World!')
})

app.listen(port)


// run the terminal and run : node index.js 
// now go to the brouser and run localhost:3000 then u will see the Hello world!
