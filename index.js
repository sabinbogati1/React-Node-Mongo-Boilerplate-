var express = require("express");
var app = express();

const config = require("./config");
require("./db")(config);

var authRoute= require("./auth");
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/auth",authRoute);

app.post("/api/", (req, res) => {

    console.log(" You are in post Method", req.body);
    //res.send(" You are in get Method");
});





app.listen(5000, "127.0.0.1", (err, done) => {
    if (err) {
        console.log("Error occured while listening at 5000 ", err);
    } else {
        console.log("Listening at port 5000.....");
    }
})