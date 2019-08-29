//dependencies
var express = require("express");

var path = require("path");

var bodyParser = require("body-parser");

//configuration for express: boiler plate
var app = express();

var PORT = process.env.PORT || 8080;

//express boilerplate middlewear
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));




app.get("/", function (req, res) {
    res.send("Hello World, This is Working");

})


// PseudoCode 
// 1) Need to Store Survey Questions 
//2) Need Routes htmlRoutes point to home.html and survey.html
function handleRequest(req, res) {
    var path = req.url;

    // Depending on the URL, display a different HTML file.
    switch (path) {

        case "/home":
            return fs.readFile(__dirname + "/home.html", function (err, data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });

        case "/survey":
            return fs.readFile(__dirname + "/survey.html", function (err, data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });



        default:
            return fs.readFile(__dirname + "/home.html", function (err, data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });
    }

}

//3) Route apiRoutes.js points to friends.js
//4) GET Route that handles everything
app.use(express.static("app/public"));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//listener
app.listen(PORT, function () {
    console.log("Listening on PORT: " + PORT)

});








