$(document).ready(function () {

    $(".banner-carousel").owlCarousel({
        margin: 0,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        autoplay: false,
        rtl: true,
        responsive: {
            0: {
                items: 1
            }
        },
        singleItem: true
    });
});
