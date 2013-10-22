var bgImages = [ "bg01.jpg", "bg02.jpg", "bg03.jpg", "bg04.jpg", "bg05.jpg", "bg06.jpg", "bg07.jpg", "bg08.jpg", "bg09.jpg", "bg10.jpg", "bg11.jpg" ];
var i = 0;
$( window ).scroll(function() {
	var bg = ( bgImages[ i ] );
	
	if( i < bgImages.length ) {
		i = i + 1;
		console.log(bgImages.length, i);
	}
	if ( i == bgImages.length ) {
		i = 0;
	}

	$( "#target" ).css( "background-image", "url(/images/"+ bg +")" );
});