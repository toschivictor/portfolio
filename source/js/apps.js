(function($) {
	$('#presentation').fadeIn(2000, function() {
		$('#about-me').slideDown('fast', function() {
			$('#work').fadeIn('slow');
		});
	});

	$('#about-me').find('a').hover(
		function() {
			$('.icon-about').fadeIn('slow');
		}, function() {
			$('.icon-about').fadeOut('fast');
		}
	);

	$('#work').find('a').hover(
		function() {
			$('.icon-work').fadeIn('slow');
		}, function() {
			$('.icon-work').fadeOut('fast');
		}
	);

	$('#about-me').on('mousedown', function() {
		$('#home').toggle( "slide" );
	});
})(jQuery);