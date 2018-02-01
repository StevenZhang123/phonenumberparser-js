var express = require('express');
var app = express();

app.get('/', function(req,res){

	res.send('working');
});

app.listen(3500);
console.log('API is running on port 3500');