var litersToGallons = function(liters) {
	return liters * 0.264172
};

var liters = parseInt(prompt("How many liters do you want to convert to gallons?"));

alert(liters + " liters equals " + litersToGallons(liters) + " gallons.");

var gallonsToLiters = function(gallons) {
	return (gallons / 0.264172).toFixed(2);
};

var gallons = parseInt(prompt("How many gallons do you want to convert to liters?"));

alert(gallons + " gallons equals " + gallonsToLiters(gallons) + " liters.");
