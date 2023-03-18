const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.listen('3000',function() {
    console.log("server started at port 3000");
});

app.post('/', function(req,res) {
    var num1 = req.body.num1;
    var num2 = req.body.num2;

    res.send("sum of the two numbers is : "+(Number(num1)+Number(num2)));
});

app.get('/', (req,res) => res.sendFile(__dirname+"/index.html"));

app.get('/bmicalculator', (req,res) => res.sendFile(__dirname+"/bmiCalculator.html"));

app.post('/bmicalculator',function(req,res) {
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);

    var bmi = weight/(height*height);

    res.send("your bmi is : "+bmi);
});