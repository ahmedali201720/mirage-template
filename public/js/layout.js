$(document).ready(() => {

    setTimeout(function () {
        $("#loading-overlay").fadeOut(600);
    }, 5000);

    setInterval(function () {
        $("#date-time-content .time").text(getTime());
        $("#date-time-content .date").text(getDate());
    }, 1000);

    $("#date-container-toggler").click(function () {
        $(this).fadeOut(300)
        const parent = $(this).parent();
        parent.find("#date-time-content").hide(300);
        setTimeout(function () {
            parent.find("#date-container-opener").show(200)
        }, 100)
    });

    $("#date-container-opener").click(function () {
        const parent = $(this).parent();
        parent.find("#date-time-content").show(200);
        parent.find("#date-container-toggler").show(200);
    });

    // *******************************************************************************************

    const sidebarToggler = $("#sidebar-toggler");
    const sidebarCloseBtn = $("#sidebar-close-btn");
    sidebarToggler.click(function () {
        openSidebar($("#sidebar"));
    });
    sidebarCloseBtn.click(function () {
        closeSidebar($("#sidebar"));
    });

    // *******************************************************************************************

    $(function () {


        let options = {
            autostart: true,
            property: 'value',
            onComplete: null,
            duration: 5000,
            padding: 10,
            marquee_class: '.marquee',
            container_class: '.simple-marquee-container',
            sibling_class: 0,
            hover: true,
            velocity: 0.05,
            direction: 'right'
        }

        $('.simple-marquee-container').SimpleMarquee(options);

    });

});