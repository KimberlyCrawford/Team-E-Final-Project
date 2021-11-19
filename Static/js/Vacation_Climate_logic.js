// Add console.log to check to see if our code is working.
// Add console.log to check to see if our code is working.
console.log("working");

// We create the map object with options.
let map = L.map('mapid').setView([60, 60], 1);

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
	console.log(city)
	L.marker(city.location, {
		city: city.population,
		avgtemp: city.avgtemp,
		cost: city.cost
	})
	.bindPopup("<h2>" + city.city + ", AvgTemp: " + city.avgtemp + "</h2> <hr> <h3>Cost USD: " + city.cost.toLocaleString() + "</h3>")
  .addTo(map);
});


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
  id: "mapbox/streets-v10",
	accessToken: API_KEY
});
// Then we add our 'streets' tile layer to the map.
streets.addTo(map);