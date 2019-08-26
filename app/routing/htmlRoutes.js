var path = require("path");


//Routes

module.exports = function (app) {

    app.get("/survey", function (req, res) {
        res.sendfile(path.join(__dirname, "/../public/survey.html"))
    });

    app.get("*", function (req, res) {
        res.sendfile(path.join(__dirname, "/../public/home.html"))
    });


};