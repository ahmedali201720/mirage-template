
function getWindowSize() {
    return $(window).width()
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
    sidebar.css('width', '0')
}

