var streets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiYnRhbGsiLCJhIjoiY2l3NXVmOTR4MDBkcDJ0cDhucDZrbDY1ZyJ9.f8U38BI8VzRPf4LsFjjJcQ'});

var map = L.map('mapid', {
    center: [39.899926, -79.732910],
    zoom: 10,
    layers: [streets]
});

var colors = ['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33'];


function onEachFeature(feature, layer) {
		// var popupContent = "<p>I started out as a GeoJSON " +
		// 		feature.geometry.type + ", but now I'm a Leaflet vector!</p>";

		// if (feature.properties && feature.properties.popupContent) {
		// 	popupContent += feature.properties.popupContent;
		// }

		layer.bindPopup(feature.properties.MUNICIPAL1);
	};

var geojson = L.geoJson(SUtwpZones, {
		style: function(feature) {
        switch (feature.properties.MUNICIPAL1) {
        		case 'SOUTH UNION Zone 1': return {color: colors[0]};
        		case 'SOUTH UNION Zone 2': return {color: colors[1]};
        		case 'SOUTH UNION Zone 3': return {color: colors[2]};
        		case 'SOUTH UNION Zone 4': return {color: colors[3]};
        		case 'SOUTH UNION Zone 5': return {color: colors[4]};
        		case 'SOUTH UNION Zone 6': return {color: colors[5]};
        }
    },
    onEachFeature: onEachFeature
	}).addTo(map);

var geojsonCounty = L.geoJson(FayetteCountyPA, {fill: false}).addTo(map);

// var baseLayers = {
// 		"Streets": streets
// 	};

// var overlays = {
// 		"Farms": farms
// 	};

// L.control.layers(baseLayers, overlays).addTo(map);
