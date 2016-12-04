var mymap = L.map('mapid').setView([39.899926, -79.732910], 13);


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiYnRhbGsiLCJhIjoiY2l3NXVmOTR4MDBkcDJ0cDhucDZrbDY1ZyJ9.f8U38BI8VzRPf4LsFjjJcQ'}).addTo(mymap);

var marker = L.marker([39.899926, -79.732910]).addTo(mymap);

marker.bindPopup("<b>Hello Joe!</b><br>Let's grab a beer sometime.").openPopup();


{% for farm in site.data.fayettefreshfarms %}
marker = new L.marker([farm[5]])
			.bindPopup(farm[2])
			.addTo(map);
{% endfor %}


// for (var i = 0; i < planes.length; i++) {
// 			marker = new L.marker([planes[i][1],planes[i][2]])
// 				.bindPopup(planes[i][0])
// 				.addTo(map);
// 		}