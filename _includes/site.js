function liveItemUpdate() {
	dataLayer.clearLayers(); // clear leaflet map markers

    var i, input, filter, itemTilesContainer, items, mapFilter = [];
    var itemName, itemIntro, itemText, txtValue, itemNumber;

    input = document.getElementById("liveItemSearch");
    filter = input.value.toLowerCase();

    // Initial modal version
	// itemContainer = document.getElementById("item-container");
    // items = itemContainer.getElementsByClassName("modal");
	// for (i = 0; i < items.length; i++) {
	// 	itemName = items[i].getElementsByClassName("item-name")[0];
	// 	itemIntro = items[i].getElementsByClassName("modal-intro")[0];
	// 	itemText = itemName.textContent + ' ' + itemIntro.textContent;
	// 	itemNumber = items[i].dataset.itemnumber;

	//       if (itemText.toLowerCase().indexOf(filter) > -1) {
	//           items[i].style.display = "";
	//           mapFilter.push(itemNumber);
	//       } else {
	//           items[i].style.display = "none";
	//       }
	//   }

	itemTilesContainer = document.getElementById("item-tiles-container");
	items = itemTilesContainer.getElementsByClassName("item");
    for (i = 0; i < items.length; i++) {
		itemName = items[i].getElementsByClassName("item-name")[0];
		itemIntro = items[i].getElementsByClassName("modal-intro")[0];
		itemText = itemName.textContent;
		itemNumber = items[i].dataset.itemnumber;

        if (itemText.toLowerCase().indexOf(filter) > -1) {
            items[i].style.display = "";
            mapFilter.push(itemNumber);
        } else {
            items[i].style.display = "none";
        }
    }

	dataLayer = L.geoJSON(data, {
		filter: function(feature) {
			featureItemNumber = feature.properties.itemNumber;
			return mapFilter.includes(featureItemNumber);
		},
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng);
		},
		onEachFeature: onEachFeature
	}).addTo(map);
}