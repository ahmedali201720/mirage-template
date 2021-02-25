$(document).ready(() => {

    setInterval(function () {
        document.querySelector('.header-date').textContent = getTime() + '\xa0\xa0\xa0\xa0' + getDate()
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

});