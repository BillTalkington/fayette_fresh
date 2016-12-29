// var mymap = L.map('mapid').setView([39.899926, -79.732910], 13);
var farms = new L.LayerGroup();

{% for farm in site.data.fayettefreshfarms %}
	marker = new L.marker([{{ farm.latlon }}])
			.bindPopup("{{ farm.name }}")
			.addTo(farms);
{% endfor %}

var streets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiYnRhbGsiLCJhIjoiY2l3NXVmOTR4MDBkcDJ0cDhucDZrbDY1ZyJ9.f8U38BI8VzRPf4LsFjjJcQ'});

var map = L.map('mapid', {
    center: [39.920332, -79.647191],
    zoom: 10,
    layers: [streets, farms]
});

var baseLayers = {
		"Streets": streets
	};

var overlays = {
		"Farms": farms
	};

L.control.layers(baseLayers, overlays).addTo(map);

var geojson = L.geoJson(FayetteCountyPA, {fill: false}).addTo(map);