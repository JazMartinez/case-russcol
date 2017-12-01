$(document).ready(function () {
    $('#fullpage').fullpage({
        navigation: true
    });


    $('#fullpage').on('mousewheel', function (event) {
        var isLast = $('.slide').last(),
            isFirst = $('.slide').first();
        if (event.deltaY > 0) {
            if (!isFirst.hasClass('active')) {
                $.fn.fullpage.moveSlideLeft();
            }
        }
        else {
            if (!isLast.hasClass('active')) {
                $.fn.fullpage.moveSlideRight();
            }
        }
    });
});
