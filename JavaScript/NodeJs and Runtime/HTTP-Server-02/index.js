const express = require("express")
const app = express();

app.get("/", function(req, res){
    res.send("Hello world from express.js");
});


app.get("/chenchu", function(req, res){
    res.send("I am chenchu, working at 2Ai lab USD");
});

app.get("/profile", function(req, res){
    res.send("Hello from the profile");
});

app.get("/profile/:username", function(req, res){
    res.send(`Hello from ${req.params.username}`);
})


app.listen(3000);
