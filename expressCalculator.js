// Express.js Calculator

var express = require("express");
var app = express();
var PORT = 8080;

app.get('/:operator/:numOne/:numTwo', function(req,res){
	
	var operator = req.params.operator
	var numOne = parseInt(req.params.numOne);
	var numTwo = parseInt(req.params.numTwo);
	var result;

	switch(operator){
		case "addition":
		result = add(numOne, numTwo);
		break;

		case "subtraction":
		result = subtract(numOne, numTwo);
		break;

		case "multiplication":
		result = multiply(numOne, numTwo);
		break;

		case "division":
		result = divide(numOne, numTwo);
		break;

		default:
		result = "Sorry, please enter a valid operator!"
	}

	function add(a, b){
		return a + b
	}

	function subtract(a, b){
		return a - b
	}

	function multiply(a, b){
		return a * b
	}

	function divide(a, b){
		return a / b
	}

	res.json(result);
});

app.get("/", function(req, res){
	res.send("hello! please type some math y'all")
});

//listener
app.listen(PORT, function(){
	console.log("App listening on PORT:" + PORT);
});