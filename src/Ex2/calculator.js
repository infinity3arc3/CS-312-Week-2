const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/", function(req, res){
  var Weight = Number(req.body.wt)
  var Height = Number(req.body.ht)

  var bmi = Weight / (Height * Height) * Number(703)
  res.send("We got it, your BMI based off on your Height of " + Height + " and "
    + "your Weight of " + Weight + " is: " + bmi);
});

app.listen(PORT, function(){
    console.log("Server listening on Port", PORT)
});