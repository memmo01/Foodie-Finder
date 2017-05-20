// Your server.js file should require the basic npm packages 
// we've used in class: express, body-parser and path.

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var data = [{
  name: "Joey Bag O'Donuts",
  picURL: "http://www.motherjones.com/files/istock_000010544064_large.jpg",
  q1: "3",
  q2: "1",
  q3: "2",
  q4: "2",
  q5: "4",
  q6: "4",
  q7: "2",
  q8: "3",
  q9: "2",
  q10: "2"
}];

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get("/survey", function(req,res){
    res.sendFile(path.join(__dirname, "./app/public/survery.html"));
});

app.get("/api/users",function(req,res){
    var users=[];
    for(var i = 0; i < data.length; i++){
        users.push(data[i]);
    }
        
    return res.json(users);
});



app.post("/api/users", function(req,res){
    data.push(req.body);
    console.log(data);

    res.json({
        complete: true
    });
});

app.listen(PORT,function(){
    console.log("server listening");
});