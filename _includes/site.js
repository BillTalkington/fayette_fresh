
$("input:checkbox").click(function(event) {

	farmsLayer.clearLayers();

    var checkedValues = $('input[type=checkbox]:checked').map(function() {
    	return "." + this.value;
		}).get().join();
		
    var notCheckedValues = $('input:checkbox:not(:checked)').map(function() {
    	return "." + this.value;
		}).get().join();

    var checkedBoxes = $('input[type=checkbox]:checked');

    var checkedClasses = checkedBoxes.map(function() {
    	return "." + this.value;
		}).get().join();

		var checkedCategories = Array.from(
			checkedBoxes.map(function() {
				return this.value;
			})
		);

		$(notCheckedValues).hide();
		$(checkedClasses).show();
		
		function findOne(a, b) {
		    return b.some(function (v) {
		        return a.indexOf(v) >= 0;
		    });
		};		

		farmsLayer = L.geoJSON(farms, {
			filter: function(feature) {
								featureFilterVals = feature.properties.products.toLowerCase();
								featureFilterVals.split(",");
							
								output = findOne(featureFilterVals, checkedCategories);
								return output;
							},
			pointToLayer: function (feature, latlng) {
				return L.marker(latlng);
			},
			onEachFeature: onEachFeature
		}).addTo(map);
});
