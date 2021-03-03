$(document).ready(() => {

    var fixedDateContainerOpened = false;

    setTimeout(function () {
        $("#loading-overlay").fadeOut(600);
    }, 5000);

    // *******************************************************************************************************

    hideFixedDateTime();

    // *******************************************************************************************************

    setInterval(function () {
        $("#date-time-content .time").text(getTime());
        $("#date-time-content .date").text(getDate());
    }, 1000);

    $("#date-container-toggler").click(function () {
        if (fixedDateContainerOpened) {
            const parent = $(this).parent();
            hideFixedDateTime(parent);
            fixedDateContainerOpened = false;
        }
    });

    $("#date-container-opener").click(function () {
        if (!fixedDateContainerOpened) {
            const parent = $(this).parent();
            showFixedDateTime(parent);
            fixedDateContainerOpened = true;
        }
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

    $(function () {
        let options = {
            autostart: true,
            property: 'value',
            onComplete: null,
            duration: 5000,
            padding: 10,
            marquee_class: '.forex-marquee',
            container_class: '.simple-forex-marquee-container',
            sibling_class: 0,
            hover: true,
            velocity: 0.05,
            direction: 'right'
        }
        $('.simple-forex-marquee-container').SimpleMarquee(options);
    });

});

// ******************************************************************************************************

$('#forexTicker').breakingNews({
    direction: getPageDirection(),
    scrollSpeed: 3,
    borderWidth: 0,
});

//*******************************************************************************************************

$(".activity-tab").click(function () {
    handleActivityTabClick($(this));
})

// *****************************************************************************************************

$(".egx-tab").click(function () {
    handleEgxTabClick($(this));
})