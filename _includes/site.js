
// function myFunction() {
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    itemContainer = document.getElementById("item-container");
    items = itemContainer.getElementsByClassName("modal");
    for (i = 0; i < items.length; i++) {
		itemName = items[i].getElementsByClassName("item-name")[0];
		itemIntro = items[i].getElementsByClassName("modal-intro")[0];
		itemText = itemName.textContent + ' ' + itemIntro.textContent
        if (itemText.toUpperCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}

function textMatch(item) {
  var searchTerm = textInput.value.toLowerCase(),
      itemText = (item.name + item.type + item.category).toLowerCase();
  return itemText.indexOf(searchTerm) !== -1;
}


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
