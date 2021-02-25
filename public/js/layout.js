$(document).ready(() => {

    const monthNames_en = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    var monthNames_ar = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
        "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
    const dateObj = new Date();
    const month = monthNames_ar[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const output = day + ' ' + month + ',' + year;
    document.querySelector('.header-date').textContent = output;

    // *******************************************************************************************

    const sidebarToggler = $("#sidebar-toggler");
    const sidebarCloseBtn = $("#sidebar-close-btn");
    sidebarToggler.click(openSidebar($(this)));

});