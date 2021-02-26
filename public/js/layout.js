$(document).ready(() => {

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

});