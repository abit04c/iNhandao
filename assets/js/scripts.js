jQuery(document).ready(function($){
	$('.list-partner').slick({
		  dots: false,
		  arrows: true,
		  speed: 300,
		  slidesToShow: 3,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		      }
		    }
		  ]
	});
})