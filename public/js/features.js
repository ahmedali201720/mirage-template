$(document).ready(() => {

    /* Copy to Cipboard */
    new ClipboardJS('.clipboard-btn');
    new ClipboardJS('.btn');

    // ****************************************************************************************
    // Count up feature on scroll
    // ****************************************************************************************

    var statsTopOffset = $("#stats").offset().top;
    var countUpDone = false;

    $(window).scroll(() => {

        if ($(window).scrollTop() === 0) {
            $("#go-up").hide(200);
        }
        else {
            $("#go-up").show(200);
        }

        if (!countUpDone && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
            $(".counter").each(function () {
                var counterElement = $(this);
                var elementValue = parseInt(counterElement.text());
                $(this).countup(elementValue);
            })
            countUpDone = true;
        }
    });

    // ***************************************************************************************************

    $("#go-up").click(function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 1000);
    })

})
