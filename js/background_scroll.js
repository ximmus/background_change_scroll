// array to hold list of background images
var bgImages = [ "bg01.jpg", "bg02.jpg", "bg03.jpg", "bg04.jpg", "bg05.jpg", "bg06.jpg", "bg07.jpg", "bg08.jpg", "bg09.jpg", "bg10.jpg", "bg11.jpg" ];

// counter initialization
var i = 0;

// scroll function
$( window ).scroll(function() {
	// initalize first background image from array
	var bg = ( bgImages[ i ] );
	
	// traverse the array on each scroll then loop to start of array
	if( i < bgImages.length ) {
		i = i + 1;
	}
	if ( i == bgImages.length ) {
		i = 0;
	}

	// change the background
	$( "#target" ).css( "background-image", "url(/images/"+ bg +")" );
});