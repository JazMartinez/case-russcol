$(document).ready(function () {
    var fpContainer = $('#fullpage'),
        isLast = $('.slide').last(),
        isFirst = $('.slide').first();

    fpContainer.fullpage({
        navigation: false,
        controlArrows: false,
        scrollOverflow: true,

        onLeave: function (index, nextIndex, direction) {
            $('.navigation__section > a').removeClass('active');
            $('a[data-section="' + nextIndex + '"]').addClass('active');

            if ($('.navigation__section_inner > a').hasClass('active')) {
                $('.navigation__section_inner > ul').slideDown(400);
            } else {
                $('.navigation__section_inner > ul').slideUp(400);
            }
        },
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
            $('.navigation__slide > a').removeClass('active');
            $('a[data-slide="' + nextSlideIndex + '"]').addClass('active');
        }
    });


    fpContainer.on('mousewheel', function (event) {
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

    fpContainer.on('swipe', function (event) {
       alert(event);
    });

    fpContainer.find('.section').each(function (index) {
        var isFirst = index === 0 ? 'active' : '',
            hasSlide = $(this).has('.slide').length,
            isInner = hasSlide === 1 ? 'navigation__section_inner' : '',
            navItem = '<li class="navigation__section ' + isInner + '"><a href="#" data-section="' + (index + 1) + '" class="' + isFirst + '">0' + (index + 1) + '</a>';

        if (hasSlide === 1) {
            navItem += '<ul class="navigation__inner-menu">';

            $(this).find('.slide').each(function (slideIndex) {
                isFirst = slideIndex === 0 ? 'active' : '';
                navItem += '<li class="navigation__slide"><a href="#" data-slide="' + slideIndex + '" class="' + isFirst + '"></a></li>';
            });

            navItem += '</ul>';
        }

        navItem += '</li>';

        $('.navigation').append(navItem);
    });

    $('.navigation__section > a').click(function (e) {
        e.preventDefault();
        var sectionIndex = Number($(this).attr('data-section'));

        $.fn.fullpage.moveTo(sectionIndex);

    });

    $('.navigation__slide > a').click(function (e) {
        e.preventDefault();
        var sectionIndex = Number($(this).parents('ul').prev().attr('data-section')),
            slideIndex = Number($(this).attr('data-slide'));

        $.fn.fullpage.moveTo(sectionIndex, slideIndex);

    });

    $('.gallsery-slider').slick({
        infinite: true,
        arrows: true,
        dots: false,
        prevArrow: '<button class="gallsery-slider__arrow gallsery-slider__arrow_prev"></button>',
        nextArrow: '<button class="gallsery-slider__arrow gallsery-slider__arrow_next"></button>'
    });

    $('.section__nav a').click(function (e) {
        e.preventDefault();
        if (!isLast.hasClass('active')) {
            $.fn.fullpage.moveSlideRight();
        } else {
            $.fn.fullpage.moveSectionDown()
        }
    });

    var win = $(window);

    win.resize(function () {
       if ($(this).width() < 560) {
           $('body').removeClass('fp-responsive');
       }
    });

    win.on('load', function () {
        if ($(this).width() < 560) {
            $('body').removeClass('fp-responsive');
        }
    });

    var animateMouseMove = function (section, elements) {
        $('.section').mousemove(function (e) {
            var posX = e.clientX * 2,
                posY = e.clientY * 2,
                elCount = elements.length,
                orientationY, orientationX,
                elPosX, elPosY, i;

            if ($(this).hasClass(section)) {
                for (i = 0; i < elCount; i++) {
                    orientationY = elements[i].orientationY ? elements[i].orientationY : '';
                    orientationX = elements[i].orientationX ? elements[i].orientationX : '';
                    elPosX = orientationX + posX / elements[i].speedX + 'px';
                    elPosY = orientationY + posY / elements[i].speedY + 'px';

                    $(elements[i].el).css({
                        'transform': 'translate(' + elPosX + ', ' + elPosY + ')'
                    });
                }
            } else {
                for (i = 0; i < elCount; i++) {
                    $(elements[i].el).removeAttr('style');
                }
            }

        })
    };

    animateMouseMove(
        'section_intro',
        [{
            el: '.intro-mokup__image_first',
            speedX: 140,
            speedY: 200,
            orientationY: '-'
        }, {
            el: '.intro-mokup__image_second',
            speedX: 100,
            speedY: 180
        }]
    );

    animateMouseMove(
        'section_markup',
        [{
            el: '.markup-devices__item_desktop',
            speedX: 180,
            speedY: 200,
            orientationY: '-'
        }, {
            el: '.markup-devices__item_mobile',
            speedX: 100,
            speedY: 160,
            orientationY: '-'
        }, {
            el: '.markup-devices__item_tablet',
            speedX: 160,
            speedY: 220,
            orientationX: '-'
        }]
    );

    animateMouseMove(
        'section_slider',
        [{
            el: '.absolute-images__item_catalog',
            speedX: 180,
            speedY: 220,
            orientationX: '-'
        }, {
            el: '.absolute-images__item_description',
            speedX: 140,
            speedY: 180,
            orientationY: '-'
        }, {
            el: '.absolute-images__item_filter',
            speedX: 160,
            speedY: 200
        }, {
            el: '.absolute-images__item_card',
            speedX: 140,
            speedY: 140,
            orientationX: '-'
        }]
    );

    animateMouseMove(
        'section_slider',
        [{
            el: '.users-images__item_register',
            speedX: 140,
            speedY: 200
        }, {
            el: '.users-images__item_kabinet',
            speedX: 100,
            speedY: 180,
            orientationX: '-'
        }]
    );
});
