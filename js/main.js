$(document).ready(function(){
	$('#continue').click(function(){
		if($('ul.active').hasClass('last')) {
		}
		else {
			$('ul.active').removeClass('active').hide().next().show().addClass('active');	
			$('#back').attr('disabled', null);
			$('#progress-bar li.active:last').next().addClass('active');
			$('#back').addClass('active');
		}

		if($('ul.active').hasClass('last')) {
			$('#continue input').attr('value', 'Submit');
		}
	});

	$('#back').click(function() {
		if($('ul.active').hasClass('first')) {

		}
		else {
			$('ul.active').removeClass('active').hide().prev().show().addClass('active');
			$('#next').attr('disabled', null);
			$('#progress-bar li.active:last').removeClass('active');
			$('#continue input').attr('value', 'Continue');
		}

		if($('ul.active').hasClass('first')) {
			$('#back').removeClass('active');
		}
	});

	$(':text, :password').focusin(function(){
		$(this).find('img.current').removeClass('current').next().addClass('current');
		$(this).parent().addClass('current');
	});

	$(':text, :password').focusout(function(){
		$(this).find('img.current').removeClass('current').prev().addClass('current');
		$(this).parent().removeClass('current');
	});

	$('li.username, li.password').hover(function(){
		$(this).find('img.current').removeClass('current').next().addClass('current');
	}, function() {
		$(this).find('img.current').removeClass('current').prev().addClass('current');
	});

	$('.alt-login li').hover(function(){
		$(this).find('img.current').removeClass('current').next().addClass('current');
	}, function() {
		$(this).find('img.current').removeClass('current').prev().addClass('current');
	});
});


function colorFunction() {
	var myselect = document.getElementById("state"),
	color = myselect.options[myselect.selectedIndex].className;
	myselect.className = color;
	myselect.blur(); //This just unselects the select list without having to click
}

