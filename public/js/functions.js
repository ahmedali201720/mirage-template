
function getWindowSize() {
    return $(window).width()
}

function getLang() {
    return $('html').attr('lang');
}

function openSidebar(sidebar) {

    if (getWindowSize() <= 576) {
        sidebar.animate({
            width: '100vw'
        }, 600, function () {
            $(".sidebar-header").fadeIn(300)
            setTimeout(function () {
                $(".sidebar-body").fadeIn(300)
            }, 400)
        })
    }
    else if (getWindowSize() > 576 && getWindowSize() <= 768) {
        sidebar.animate({
            width: '75vw'
        }, 600, function () {
            $(".sidebar-header").fadeIn(300)
            setTimeout(function () {
                $(".sidebar-body").fadeIn(300)
            }, 400)
        })
    }
    else if (getWindowSize() > 768 && getWindowSize() <= 992) {
        sidebar.animate({
            width: '40vw'
        }, 600, function () {
            $(".sidebar-header").fadeIn(300)
            setTimeout(function () {
                $(".sidebar-body").fadeIn(300)
            }, 400)
        })
    }
    else if (getWindowSize() > 992 && getWindowSize() <= 1200) {
        sidebar.animate({
            width: '30vw'
        }, 600, function () {
            $(".sidebar-header").fadeIn(300)
            setTimeout(function () {
                $(".sidebar-body").fadeIn(300)
            }, 400)
        })
    }
    else if (getWindowSize() > 1200) {
        sidebar.animate({
            width: '20vw'
        }, 600, function () {
            $(".sidebar-header").fadeIn(300)
            setTimeout(function () {
                $(".sidebar-body").fadeIn(300)
            }, 400)
        })
    }

}

function closeSidebar(sidebar) {
    $(".sidebar-body").fadeOut(300)
    setTimeout(function () {
        $(".sidebar-header").fadeOut(300)
    }, 700)
    setTimeout(function () {
        sidebar.animate({
            width: '0'
        }, 700)
    })
}

function getTime() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    return hours + ':' + minutes + ':' + seconds;
}

function getDate() {
    var month;
    const monthNames_en = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    var monthNames_ar = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
        "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
    const dateObj = new Date();
    if (getLang() == 'ar')
        month = monthNames_ar[dateObj.getMonth()];
    else
        month = monthNames_en[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const output = day + ' ' + month + ',' + year;
    return output;
}

function displayElement(element, type, duration) {
    if (type == 'fade')
        element.fadeIn(duration);
    else if (type == 'show')
        element.show(duration);
}

function hideElement(element, type, duration) {
    if (type == 'fade')
        element.fadeOut(duration);
    else if (type == 'show')
        element.hide(duration);
}

