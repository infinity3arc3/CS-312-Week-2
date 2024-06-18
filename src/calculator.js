const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html")
});

app.get('/bmicalculator', function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/", function(req, res){
  var sub = req.body.boa
  
  if(sub == "0") {
    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)

    var sum = num1 + num2
    res.send("We got it, your sum is: " + sum)
  }
  else {
    var Weight = Number(req.body.wt)
    var Height = Number(req.body.ht)

    var bmi = Weight / (Height * Height) * Number(703)
    res.send("We got it, your BMI based off on your Height of " + Height + " and "
      + "your Weight of " + Weight + " is: " + bmi);
  }
});

app.listen(PORT, function(){
    console.log("Server listening on Port", PORT)
});