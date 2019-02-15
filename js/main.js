"use strict";

// Screen Size
$(window).resize(screenSizer);
var screenWidth = document.documentElement.offsetWidth;

function screenSizer() {
    screenWidth = document.documentElement.offsetWidth;
	if (screenWidth > 767) {
	 	$(".nav_bar-menu").css("display", "block");
	 	$(".nav_bar-menu").css("opacity", "1")
	}
}

/*
//Hide nav bars
if (screenWidth > 767){
	if (navigator.userAgent.match(/Android/i) ||
	    navigator.userAgent.match(/webOS/i) ||
	    navigator.userAgent.match(/iPhone/i) ||
	    navigator.userAgent.match(/iPad/i) ||
	    navigator.userAgent.match(/iPod/i) ||
	    navigator.userAgent.match(/BlackBerry/i) ||
	    navigator.userAgent.match(/Windows Phone/i)
	) {
	    $("ul").css("display", "none");
	} else {
	    $("ul").css("display", "block");
	}
}*/

// Scroll to Top
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200); // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200); // Else fade out the arrow
    }
})

$('#return-to-top').click(function() { // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 500);
})

// Button nav scroll
var show_hide_on_off = false;

function show_hide() {
    if (!show_hide_on_off) {
        scrollNavShow();
    } else {
        scrollNavHide();
    }
}

function scrollNavHide() {
    show_hide_on_off = false;
    $(".nav_bar-menu").slideUp(800).animate({
        opacity: 0
    }, {
        queue: false,
        duration: 'slow'
    })
}

function scrollNavShow() {
    show_hide_on_off = true;
    $(".nav_bar-menu").css("opacity", "0");
    $(".nav_bar-menu").slideDown(800).animate({
        opacity: 1
    }, {
        queue: false,
        duration: 1500
    });
}

function anchorHide() {
    show_hide_on_off = false;
    $(".nav_bar-menu").css("display", "none");
}


$("#button_nav").on('click', show_hide);
$(".nav_bar-list a").on('click', anchorHide);
// ! Button nav scroll
