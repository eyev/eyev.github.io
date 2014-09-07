$(document).ready(function(){
	// When Menu Icon is clicked in sidebar
	$("nav ul li.menu-bars").on('click', function() { 
		// Toggle Class on aside to display wider display.
		$('aside').toggleClass('menu-expand');
		$('.container').toggleClass('menu-push');
		$('li.menu-bars i').toggleClass('fa-bars');
		$('li.menu-bars i').toggleClass('fa-close');
	});
	
}); // close document.ready

