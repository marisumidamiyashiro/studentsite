// PRELOADER

$(document).ready(function() {

    setTimeout(function() {
        $('#ctn-preloader').addClass('loaded');
        $('body').removeClass('no-scroll-y');

    if ($('#ctn-preloader').hasClass('loaded')) {

        $('#preloader').delay(2000).queue(function() {
            $(this).remove();
        });
        }
    }, 3750);
    
});

// SWIPERJS 

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    mousewheel: true,
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    hashNavigation: {
        watchState: true,
    },
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});

// SITE-NAV

const mymenubutton = document.querySelector('.menu-button');
const mysitenav = document.querySelector('.site-header .site-nav');

    mymenubutton.onclick = function () {
        if ( mysitenav.getAttribute('data-navstate') === 'open') {
    mysitenav.setAttribute('data-navstate', 'closed');
    } else {
    mysitenav.setAttribute('data-navstate', 'open');
    }
};

// OVERLAY NAV HIDE ON NAV ITEM CLICK
var drawernavlinks = document.querySelectorAll(".drawer nav a");
var drawerheader = document.querySelector(".drawer .site-nav");
var j;
for (j = 0; j < drawernavlinks.length; j++) {
    drawernavlinks[j].onclick = function () {
        drawerheader.setAttribute('data-navstate', 'closed');
    };
};

