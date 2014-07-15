$(document).ready(function(){
	$('.involvement, .skills, .work, .activities').hide();

	$('.tab1').click(function() {
		$('.education').show();
		$('.involvement, .skills, .work, .activities').hide();
	});

	$('.tab2').click(function() {
		$('.involvement').show();
		$('.education, .skills, .work, .activities').hide();
	});

	$('.tab3').click(function() {
		$('.skills').show();
		$('.education, .involvement, .work, .activities').hide();
	});

	$('.tab4').click(function() {
		$('.work').show();
		$('.education, .involvement, .skills, .activities').hide();
	});

	$('.tab5').click(function() {
		$('.activities').show();
		$('.education, .involvement, .skills, .work').hide();
	});
});