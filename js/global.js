$(document).ready(function(){

	$('#android_carousel').liquidCarousel({
		height: 108,
		hideNavigation: false
	});

	$('#partheni_carousel').liquidCarousel({
		height: 170,
		hideNavigation: true,
		animationDuration: 800,
		noTransitions: true
	});

	 //$('#partheni_carousel').data('liquidCarousel').next();
	 //$('#partheni_carousel').data('liquidCarousel').previous();
});
