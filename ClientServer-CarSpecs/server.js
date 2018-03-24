var exp = require('express');
var fs = require('fs');
var app = exp();
var cars = fs.readFileSync(__dirname + '/car.json','utf8');
 var carsJson = JSON.parse(cars.trim());

app.get('/' , function(req , res){
 	
 	res.set({'Content-Type':'text/html'});
	 res.status(200);
 	res.send(fs.readFileSync('./page.html' ,'utf8'));
	 });
	 
app.get('/search' , function(req ,res){
	var stat = 0;
	var searchedCar = req.query['car'];
	for(var x in carsJson){
		if(x == searchedCar ){
			res.status(200);
			res.send(carsJson[searchedCar]);
			stat++;
			break;
		}
		
	}
	if(stat == 0 ) {
		res.status(200);
		res.send("sorry the car model you searched is not found");
		
	}
	
})
console.log("server started......port number 3000")
app.listen(3000);
