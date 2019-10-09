function setInitialMapZoom() {

   var viewportWidth = window.innerWidth;
   var mapZoom;

   if (viewportWidth < 600) {
      mapZoom = 9; 
	 } else {
      mapZoom = 10; 
	 }

return mapZoom;
}

var map = L.map('mapid', {
    center: [39.920332, -79.647191],
    zoom: setInitialMapZoom()
});

var streets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiYnRhbGsiLCJhIjoiY2l3NXVmOTR4MDBkcDJ0cDhucDZrbDY1ZyJ9.f8U38BI8VzRPf4LsFjjJcQ'})
	.addTo(map);

function onEachFeature(feature, layer) {
	if (feature.properties && feature.properties.name) {
		var popupContent = feature.properties.name;
	}
	layer.bindPopup(popupContent);
}

var geojson = L.geoJson(FayetteCountyPA, {fill: false}).addTo(map);

var dataLayer = L.geoJSON(data, {
	pointToLayer: function (feature, latlng) {
		return L.marker(latlng);
	},
	onEachFeature: onEachFeature
}).addTo(map);