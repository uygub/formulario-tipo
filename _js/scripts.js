
/* GENERAL
============================================================== */
$(document).ready(function() {
	/* Detección de javascript */
	$('html').removeClass('js-off');
});

/* Popups */
$('.popup-sm').fancybox({
	minWidth: '35%',
	padding: 0,
	closeBtn: true,
	title: null,
	helpers: {
		overlay: {
			closeClick: false,
			locked: true
		}
	}
});
$('.popup-md').fancybox({
	minWidth: '45%',
	padding: 0,
	closeBtn: true,
	title: null,
	helpers: {
		overlay: {
			closeClick: false,
			locked: true
		}
	}
});
$('.popup-lg').fancybox({
	minWidth: '65%',
	padding: 0,
	closeBtn: true,
	title: null,
	helpers: {
		overlay: {
			closeClick: false,
			locked: true
		}
	}
});