$(document).ready(function(){
	$('.bxslider').bxSlider({
		auto: true,
		slideMargin: 10,
		slideWidth: 400,
		minSlides:2,
		maxSlides:4,
		captions: true
	});
	$(".greenHeading").click(function(){
		$(this).css("color","#7FFF00")
	});
});
