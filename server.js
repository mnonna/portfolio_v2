/* eslint-disable */

require("dotenv").config();

var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var cors = require("cors");
var mail = require("./mail");

app = express();

app.use(express.json());
app.use(cors());
app.use(serveStatic(__dirname + "/dist"));

app.get("/", (req,res) => {
    res.json({message: "Hello"});
})

app.post("/email", (req,res) => {
    let options = req.body;

    console.log(options);

    mail(options, (err,response) => {
        if(err){
            res.status(500).json({error: `Something went wrong. Try again. ${err}`});
        }else{
            res.status(200).json({success: "Message sent successfully"});
        }
    });
})

var port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});