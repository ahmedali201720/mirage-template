$(document).ready(function () {

    $(".news-carousel").owlCarousel({
        margin: 20,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        rtl: true,
        responsive: {
            0: {
                items: 1.2
            },
            280: {
                items: 1
            },
            400: {
                items: 1.2
            },
            576: {
                items: 2.1
            },
            768: {
                items: 2.75
            },
            992: {
                items: 2.1
            },
            1200: {
                items: 3
            },
            1300: {
                items: 3.25
            },
            1500: {
                items: 3.75
            },
            1600: {
                items: 4
            }
        },
    });

});