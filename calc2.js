/**
 * Created by arnoc on 13/10/2016.
 */
var express = require("express");
var app = new express();
var bodyParser = require('body-parser');

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

// search file in directory
app.get("/", function (req, res) {
    res.sendFile( __dirname + '/index.html');

});

// request value post method
app.post("/", function (req, res) {
    var equation = req.body.values;
    var expression = eval(equation);
    console.log(expression);
    res.send('<h1> The solution is '+  expression + '</h1>');

});

console.log("Server is running on port 8000")

app.listen(8000);