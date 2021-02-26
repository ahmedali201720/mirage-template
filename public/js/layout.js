$(document).ready(() => {

    setTimeout(function () {
        $("#loading-overlay").fadeOut(600);
    }, 5000);

    setInterval(function () {
        $("#date-time-content .time").text(getTime());
        $("#date-time-content .date").text(getDate());
    }, 1000);

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

    $('.news-ticker-item').AcmeTicker({
        type: 'marquee',/*horizontal/horizontal/Marquee/type*/
        direction: 'right',/*up/down/left/right*/
        speed: 0.05,/*true/false/number*/ /*For vertical/horizontal 600*//*For marquee 0.05*//*For typewriter 50*/
        autoplay: 2000,
        controls: {
            toggle: $('.acme-news-ticker-pause'),/*Can be used for horizontal/horizontal/typewriter*//*not work for marquee*/
        }
    });

});