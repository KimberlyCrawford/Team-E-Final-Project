// Add console.log to check to see if our code is working.
console.log("working");

// Import pandas
import pandas as pd

//import data
url = 'https://cgl-analytics-city-data.s3.us-east-2.amazonaws.com/CleanedGlobalLandTemperaturesByMajorCity.csv'

// Since we already have three layers set up here I see no reason not to include all three options. 
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// We create the second tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [40.7, -94.5],
	zoom: 3,
	layers: [streets]
});

// Create a base layer that holds all three maps.
let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets,
  "Dark": dark
};

// 1. Add a 2nd layer group for weather data.
// This is an example from the earthquake date: let allEarthquakes = new L.LayerGroup();



// 2. This is where the machine learning should be plugged in i'm pretty sure.  We might need to create this
// in tablaue and then use it as a URL like we do with the JSON data. 


// Then we add a control to the map that will allow the user to change which
// layers are visible.  We should do this as an input for year. Maybe a filter?


// Retrieve the data that our map will reference.
climateData = pd.read_csv("url").then(function(data) {

  // This function returns the style data for the map. This might not be useful with a heat map, so we may
  //remove this.

  //function styleInfo(feature) {
    //return {
      //opacity: 1,
      //fillOpacity: 1,
      //fillColor: getColor(feature.properties.mag),
      //color: "#000000",
      //radius: getRadius(feature.properties.mag),
      //stroke: true,
      //weight: 0.5
    //};
  //}

  // This may or may not be useful depending on how we can customize heat map. If uselss then delete.
  //function getColor(magnitude) {
    //if (magnitude > 5) {
      //return "#ea2c2c";
    //}
    //if (magnitude > 4) {
      //return "#ea822c";
    //}
    //if (magnitude > 3) {
      //return "#ee9c00";
    //}
    //if (magnitude > 2) {
      //return "#eecc00";
    //}
    //if (magnitude > 1) {
      //return "#d4ee00";
    //}
    //return "#98ee00";
  //}

  // This function determines the radius of the earthquake marker based on its magnitude.
  // Earthquakes with a magnitude of 0 were being plotted with the wrong radius.
  //function getRadius(magnitude) {
    //if (magnitude === 0) {
      //return 1;
    //}
    //return magnitude * 4;
  //}

// Creating a GeoJSON layer with the retrieved data. This should be useful we just need to edit it to match
// the new map.
// This will probably be deleted if we cannot use anything from here. 
L.geoJson(data, {
    // We turn each feature into a circleMarker on the map.
  	pointToLayer: function(feature, latlng) {
      	console.log(data);
      	return L.circleMarker(latlng);
       },
    // We set the style for each circleMarker using our styleInfo function.
  style: styleInfo,
    // We create a popup for each circleMarker to display the magnitude and location of the earthquake
    //  after the marker has been created and styled.
   onEachFeature: function(feature, layer) {
    layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
  }
}).addTo(allEarthquakes);



 // Loop through the machine learning data and create one marker for each city.
 // This will need to be edited with the new machine data tags.
cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
      radius: city.population/100000
  })
  //below is how we add adtional data to the markers when we click on them
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});   

 // 3. Retrieve the future predicted GeoJSON data >4.5 mag for the week.
 d3.json("url for future predicted").then(function(data) {

  // 4. Use the same style data. This again might be useless.
  //function styleInfo(feature) {
    //return {
      //opacity: 1,
      //fillOpacity: 1,
      //fillColor: getColor(feature.properties.mag),
      //color: "#000000",
      //radius: getRadius(feature.properties.mag),
      //stroke: true,
      //weight: 0.5
    //};
  //}   

  // 5. Change the color function to use three colors for the climate change based on the favorabilty of the 
  // location. If we put the heat map here then this should be useful. 
  function getColor(magnitude) {
    if (magnitude > 5) {
      return "#ea2c2c";
    }
    if (magnitude > 4) {
      return "#ea822c";
    }
    return "#98ee00";
  }


  // 6. Creating a GeoJSON layer with the retrieved data that adds the map 
  // sets the style of the circle, and displays the favorability and location of the vacation spots.
  //  after the marker has been created and styled.
  L.geoJson(data, {
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng);
    },
    style: styleInfo,
    onEachFeature: function(feature, layer) {
      layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
    }
  }).addTo(majorEarthquakes);
  // 8. Add the major earthquakes layer to the map.
  majorEarthquakes.addTo(map);
  // 9. Close the braces and parentheses for the major earthquake data.
  });
  
  // Here we create a legend control object. This will all need to be editited depending on final project.
  let legend = L.control({
    position: "bottomright"
  });

  // Then add all the details for the legend
  legend.onAdd = function() {
    let div = L.DomUtil.create("div", "info legend");
    const magnitudes = [0, 1, 2, 3, 4, 5];
    const colors = [
      "#98ee00",
      "#d4ee00",
      "#eecc00",
      "#ee9c00",
      "#ea822c",
      "#ea2c2c"
    ];

  // Looping through our intervals to generate a label with a colored square for each interval.
  for (var i = 0; i < magnitudes.length; i++) {
    console.log(colors[i]);
    div.innerHTML +=
      "<i style='background: " + colors[i] + "'></i> " +
      magnitudes[i] + (magnitudes[i + 1] ? "&ndash;" + magnitudes[i + 1] + "<br>" : "+");
    }
    return div;
  };

// Finally, we add our legend to the map.
legend.addTo(map);


  // 3. Use d3.json to make a call to get our Tectonic Plate geoJSON data. I don't think we'll need anything
  // past this. But leaving just in case. 

d3.json("https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json").then(function(data) {
	console.log(data);

	// Create a GeoJSON layer with the retrieved data
	L.geoJson(data, {
		style: {color: "#703606", weight: 3},
	}).addTo(tectonic);
});

	// Add tectnoic plates layer to map
	tectonic.addTo(map);
});