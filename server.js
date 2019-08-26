//dependencies
var express = require("express");

//configuration for express: boiler plate
var app = express();

var PORT = process.env.PORT || 8080;

//express boilerplate middlewear
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//listener



app.get("/", function (req, res) {
    res.send("Hello World, This is Working");

})


app.listen(PORT, function () {
    console.log("Listening on PORT: " + PORT)

});