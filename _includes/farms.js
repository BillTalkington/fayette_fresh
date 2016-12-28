// var mymap = L.map('mapid').setView([39.899926, -79.732910], 13);
var farms = new L.LayerGroup();

{% for farm in site.data.fayettefreshfarms %}
	marker = new L.marker([{{ farm.latlon }}])
			.bindPopup("{{ farm.name }}")
			.addTo(farms);
{% endfor %}

var joe = new L.LayerGroup();

L.marker([39.899926, -79.732910])
			.addTo(joe)
			.bindPopup("<b>Hello Joe!</b><br>Let's grab a beer sometime.");

var streets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiYnRhbGsiLCJhIjoiY2l3NXVmOTR4MDBkcDJ0cDhucDZrbDY1ZyJ9.f8U38BI8VzRPf4LsFjjJcQ'});

var map = L.map('mapid', {
    center: [39.899926, -79.732910],
    zoom: 10,
    layers: [streets, farms, joe]
});

var baseLayers = {
		"Streets": streets
	};

var overlays = {
		"Farms": farms
	};

L.control.layers(baseLayers, overlays).addTo(map);