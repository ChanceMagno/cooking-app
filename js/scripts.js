var litersToGallons = function(liters) {
	return liters * 0.264172
};
var gallonsToLiters = function(gallons) {
	return gallons / 0.264172
};
var poundsToKilograms = function(lbs) {
	return lbs * 0.453592
};
var kilogramsToPounds = function(kg) {
	return kg / 0.453592
};

var ouncesToMilliliters = function(ounces) {
	return ounces * 29.5735;
};

var millilitersToOz = function(mL) {
	return mL / 29.5735;
};

$(document).ready(function(){
	$("form#ozToML").submit(function(event) {
		var mL = ouncesToMilliliters($("input#ounces").val());
		$("#mlFromOz").text(mL);
		event.preventDefault();
	});
	$("form#mLtoOz").submit(function(event) {
		var oz = millilitersToOz($("input#mL").val());
		$("#ozFromML").text(oz);
		event.preventDefault();
	});
	$("form#lbsToKg").submit(function(event) {
		var kg = poundsToKilograms($("input#lbs").val());
		$("#kgFromLbs").text(kg);
		event.preventDefault();
	});
	$("form#kgToLbs").submit(function(event) {
		var mL = kilogramsToPounds($("input#kg").val());
		$("#lbsFromKg").text(mL);
		event.preventDefault();
	});
	$("form#gallonsToLiters").submit(function(event) {
		var kg = gallonsToLiters($("input#gallons").val());
		$("#litersFromGallons").text(kg);
		event.preventDefault();
	});
	$("form#litersToGallons").submit(function(event) {
		var mL = litersToGallons($("input#liters").val());
		$("#gallonsFromLiters").text(mL);
		event.preventDefault();
	});
});
