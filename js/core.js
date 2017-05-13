$(document).ready(function(){

	$('#menu-btn').click(function(){		
			$('.header_menu').slideToggle(700);	
			if ($(this).hasClass('not-active')) {
				$(this).addClass('is-active').removeClass('not-active');
			}else{
				setTimeout(function(){
					$('.is-active').addClass('not-active').removeClass('is-active')
				},600)			
			}		
		});

	$('.sub').click(function(){		
			$('.menu--submenu').slideToggle(400);	
			if ($(this).hasClass('hide-sub-menu')) {
				$(this).addClass('show-sub-menu').removeClass('hide-sub-menu');
			}else{
				setTimeout(function(){
					$('show-sub-menu').addClass('hide-sub-menu').removeClass('show-sub-menu')
				},300)			
			}		
		});
	$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

});