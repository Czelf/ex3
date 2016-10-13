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

app.get("/", function (req, res) {
    res.sendFile( __dirname + '/index.html');
});

app.post("/", function (req, res) {
    var equation = req.body.values;
    var expression = eval(equation);
    //console.log(equation)
    //console.log(expression);

    //var regex = /([\+\-\*\/])/;
    //var  a = equation.split(regex);
   // console.log(a)

});

console.log("Server is running on port 8000")

app.listen(8000);