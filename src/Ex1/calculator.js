const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){
  var num1 = Number(req.body.num1)
  var num2 = Number(req.body.num2)

  var sum = num1 + num2
  res.send("We got it, your sum is: " + sum)
});

app.listen(PORT, function(){
    console.log("Server listening on Port", PORT)
});