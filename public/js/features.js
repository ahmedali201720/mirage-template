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

        if (!countUpDone && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
            $(".counter").each(function (key, value) {
                var counterElement = $(this);
                var elementValue = parseInt(counterElement.text());
                $(this).countup(elementValue);
            })
            countUpDone = true;
        }
    })

})
