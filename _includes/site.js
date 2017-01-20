

// $(window).on('load', function () {
//     $('#checkbox-beef').change(function () {
//         if (this.checked) 
//         //  ^
//            $('.beef').fadeIn('slow');
//         else 
//             $('.beef').fadeOut('slow');
//     });
// });


// $(window).on('load', function () {
//     $('#checkbox-vegetables').change(function () {
//         if (this.checked) 
//         //  ^
//            $('.vegetables').fadeIn('slow');
//         else 
//             $('.vegetables').fadeOut('slow');
//     });
// });

// $(window).on('load', function () {
//     $('#checkbox-fruit').change(function () {
//         if (this.checked) 
//         //  ^
//            $('.fruit').fadeIn('slow');
//         else 
//             $('.fruit').fadeOut('slow');
//     });
// });	


////////////////////////
$("input:checkbox").click(function(event) {

    var checkedValues = $('input[type=checkbox]:checked').map(function() {
    	return "." + this.value;
		}).get().join();
		
    var notCheckedValues = $('input:checkbox:not(:checked)').map(function() {
    	return "." + this.value;
		}).get().join();
		
    // alert("Checked values: " + checkedValues);
    // alert("Un-checked values: " + notCheckedValues);

		$(notCheckedValues).hide();
		$(checkedValues).show();

});
