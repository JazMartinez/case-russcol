$(document).ready(function() {
    var e = $("#fullpage"), i = $(".slide").last(), a = $(".slide").first();
    e.fullpage({
        navigation: !1,
        controlArrows: !1,
        scrollOverflow: !0,
        onLeave: function(e, i, a) {
            $(".navigation__section > a").removeClass("active"), $('a[data-section="' + i + '"]').addClass("active"), 
            $(".navigation__section_inner > a").hasClass("active") ? $(".navigation__section_inner > ul").slideDown(400) : $(".navigation__section_inner > ul").slideUp(400);
        },
        onSlideLeave: function(e, i, a, t, s) {
            $(".navigation__slide > a").removeClass("active"), $('a[data-slide="' + s + '"]').addClass("active");
        }
    }), e.on("mousewheel", function(e) {
        e.deltaY > 0 ? a.hasClass("active") || $.fn.fullpage.moveSlideLeft() : i.hasClass("active") || $.fn.fullpage.moveSlideRight();
    }), e.on("swipe", function(e) {
        alert(e);
    }), e.find(".section").each(function(e) {
        var i = 0 === e ? "active" : "", a = $(this).has(".slide").length, t = '<li class="navigation__section ' + (1 === a ? "navigation__section_inner" : "") + '"><a href="#" data-section="' + (e + 1) + '" class="' + i + '">0' + (e + 1) + "</a>";
        1 === a && (t += '<ul class="navigation__inner-menu">', $(this).find(".slide").each(function(e) {
            t += '<li class="navigation__slide"><a href="#" data-slide="' + e + '" class="' + (i = 0 === e ? "active" : "") + '"></a></li>';
        }), t += "</ul>"), t += "</li>", $(".navigation").append(t);
    }), $(".navigation__section > a").click(function(e) {
        e.preventDefault();
        var i = Number($(this).attr("data-section"));
        $.fn.fullpage.moveTo(i);
    }), $(".navigation__slide > a").click(function(e) {
        e.preventDefault();
        var i = Number($(this).parents("ul").prev().attr("data-section")), a = Number($(this).attr("data-slide"));
        $.fn.fullpage.moveTo(i, a);
    }), $(".gallsery-slider").slick({
        infinite: !0,
        arrows: !0,
        dots: !1,
        prevArrow: '<button class="gallsery-slider__arrow gallsery-slider__arrow_prev"></button>',
        nextArrow: '<button class="gallsery-slider__arrow gallsery-slider__arrow_next"></button>'
    }), $(".section__nav a").click(function(e) {
        e.preventDefault(), i.hasClass("active") ? $.fn.fullpage.moveSectionDown() : $.fn.fullpage.moveSlideRight();
    });
    var t = $(window);
    t.resize(function() {
        $(this).width() < 560 && $("body").removeClass("fp-responsive");
    }), t.on("load", function() {
        $(this).width() < 560 && $("body").removeClass("fp-responsive");
    });
    var s = function(e, i) {
        $(".section").mousemove(function(a) {
            var t, s, n, o, l = 2 * a.clientX, r = 2 * a.clientY, d = i.length;
            if ($(this).hasClass(e)) for (o = 0; o < d; o++) t = i[o].orientationY ? i[o].orientationY : "", 
            s = (i[o].orientationX ? i[o].orientationX : "") + l / i[o].speedX + "px", n = t + r / i[o].speedY + "px", 
            $(i[o].el).css({
                transform: "translate(" + s + ", " + n + ")"
            }); else for (o = 0; o < d; o++) $(i[o].el).removeAttr("style");
        });
    };
    s("section_intro", [ {
        el: ".intro-mokup__image_first",
        speedX: 140,
        speedY: 200,
        orientationY: "-"
    }, {
        el: ".intro-mokup__image_second",
        speedX: 100,
        speedY: 180
    } ]), s("section_markup", [ {
        el: ".markup-devices__item_desktop",
        speedX: 180,
        speedY: 200,
        orientationY: "-"
    }, {
        el: ".markup-devices__item_mobile",
        speedX: 100,
        speedY: 160,
        orientationY: "-"
    }, {
        el: ".markup-devices__item_tablet",
        speedX: 160,
        speedY: 220,
        orientationX: "-"
    } ]), s("section_slider", [ {
        el: ".absolute-images__item_catalog",
        speedX: 180,
        speedY: 220,
        orientationX: "-"
    }, {
        el: ".absolute-images__item_description",
        speedX: 140,
        speedY: 180,
        orientationY: "-"
    }, {
        el: ".absolute-images__item_filter",
        speedX: 160,
        speedY: 200
    }, {
        el: ".absolute-images__item_card",
        speedX: 140,
        speedY: 140,
        orientationX: "-"
    } ]), s("section_slider", [ {
        el: ".users-images__item_register",
        speedX: 140,
        speedY: 200
    }, {
        el: ".users-images__item_kabinet",
        speedX: 100,
        speedY: 180,
        orientationX: "-"
    } ]);
});