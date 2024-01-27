const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static('./public'))

app.get("/error", function(req, res, next){
    throw Error("Somethings went wrong");
});

app.get("/", function(req, res){
    res.render("index"); // should be the file which will be present in the views folder but do not mention .ejs of the file here in this function
});

app.get("/contact", function(req, res){
    res.render("index"); // should be the file which will be present in the views folder but do not mention .ejs of the file here in this function
});

app.use(function errorHandler(err, req, res, next){
    if(res.headersSent){
        return next(err)
    }
    res.status(500)
    res.render('error', {error : err})
  })

app.listen(3000); // listens on port 3000