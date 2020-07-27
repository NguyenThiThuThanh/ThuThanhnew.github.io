
/**
 *  Obj
 * @type {Object}
 */

let Obj = {};

(function ($) {
    "use strict";

    /************************************************************
     * Predefined letiables
     *************************************************************/
    let $window = $(window),
        $body = $('body'),
        $document = $(document);

    /**
     * exists - NextBeat
     * @return true
     */
    $.fn.exists = function () {
        return this.length > 0;
    };

    /**
     * isMobile - Check mobile screen - NextBeat
     * @return void
     */
    $.fn.isMobile = function () {
        if ($window.width() > 750) {
            return false;
        }
        return true;
    };

    /**
     * uaSetting - NextBeat
     * @return void
     */
    Obj.uaSetting = function () {
        let _ua = (function (u) {
            return {
                Tablet: (u.indexOf('windows') !== -1 && u.indexOf('touch') !== -1 && u.indexOf('tablet pc') === -1) ||
                    u.indexOf('ipad') !== -1 ||
                    (u.indexOf('android') !== -1 && u.indexOf('mobile') === -1) ||
                    (u.indexOf('firefox') !== -1 && u.indexOf('tablet') !== -1) ||
                    u.indexOf('kindle') !== -1 ||
                    u.indexOf('silk') !== -1 ||
                    u.indexOf('playbook') !== -1,
                Mobile: (u.indexOf('windows') !== -1 && u.indexOf('phone') !== -1) ||
                    u.indexOf('iphone') !== -1 ||
                    u.indexOf('ipod') !== -1 ||
                    (u.indexOf('android') !== -1 && u.indexOf('mobile') !== -1) ||
                    (u.indexOf('firefox') !== -1 && u.indexOf('mobile') !== -1) ||
                    u.indexOf('blackberry') !== -1,
            }
        })(window.navigator.userAgent.toLowerCase());
        if (_ua.Tablet || _ua.Mobile) {
            $body.addClass('sp');
        }
    }

    Obj.slickSlider = function() {
        $(".slider-list").slick({
            centerMode: true,
            variableWidth: true,
            focusOnSelect: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
            autoplay: true,
            autoplaySpeed: 5000,
        });
    }

    Obj.addClass = function() {
        $(".block:odd").addClass("block--left");
        $(".block__thumb:odd").addClass("thumb--left");
        $(".block:even").addClass("block--right");
        $(".block__thumb:even").addClass("thumb--right");
    }

    Obj.activeList = function() {
        $(".navbar li").click(function() {
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
        })
        $(".dropdown__content li").click(function() {
            $(this).addClass("active");
            $(this).parent().parent().siblings().children().children().removeClass("active");
        })
    }

    Obj.menuButton = function() {
        $(".navbar-toggler").click(function() {
            $(".navbar-collapse").slideToggle( "slow" );
        })
    }

    Obj.scrollFunction = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            $("#mainNav").addClass("navbar-scrolled");
        } else {
            $("#mainNav").removeClass("navbar-scrolled");
        }
    }

    // Smooth scrolling using jQuery easing
    // Obj.scrolling = function() {
    //     // $document.on("scroll", onScroll);
    //     $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    //         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //             // $(document).off("scroll");
    //             $('a.js-scroll-trigger').each(function () {
    //                 $(this).removeClass('active');
    //             })
    //             $(this).addClass("active");
                
    //             var target = $(this.hash);
    //             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //             if (target.length) {
    //                 $('html, body').animate({
    //                     scrollTop: (target.offset().top - 70)
    //                 }, 600);
    //                 return false;
    //             }
    //         }
    //     });
    // }

    //scroll active
    // Obj.scrNav = function() {
    //     var scrollPos = $document.scrollTop();
    //     $('a.js-scroll-trigger').each(function () {
    //         var currLink = $(this);
    //         var refElement = $(currLink.attr("href"));
    //         if (refElement.offset().top <= scrollPos && refElement.offset().top + refElement.height() > scrollPos) {
    //             $('a.js-scroll-trigger').removeClass("active");
    //             currLink.addClass("active");
    //         }
    //         else{
    //             currLink.removeClass("active");
    //         }
    //     });
    // }
    
    
    // function() {
    //     var link = $('a.js-scroll-trigger');
    //     var sTop = $(window).scrollTop();
    //     $('section').each(function() {
    //       var id = $(this).attr('id'),
    //           offset = $(this).offset().top - $(".section-download").outerHeight(true),
    //           height = $(this).height();
    //       if(sTop >= offset && sTop < offset + height) {
    //         link.parent().siblings().children().removeClass('active');
    //         $('#mainNav').find('[data-scroll="' + id + '"]').addClass('active');
    //       }
    //     });
    // }

    //light-box
    Obj.lightBox = function() {
        $("a.portfolio-box").click(function(){
            var x = $(this).attr('src');
            $(".light-img").attr('src', x);
            $(".light-box").fadeIn('fast');
            $('body').addClass('overflow-hidden');

        })
        $(window).keyup(function() {
            $('.lightbox').fadeOut('fast');
            $('body').removeClass('overflow-hidden');
        })
    }

    /************************************************************
     * Obj Window load, ready, scroll, resize and functions
     *************************************************************/
    //Window load functions
    //
    $window.on('load', function () {
        Obj.uaSetting();
    });
    //Document ready functions
    $document.ready(function () {
        Obj.menuButton();
        //Obj.scrolling();
        Obj.lightBox();

        // Closes responsive menu when a scroll trigger link is clicked
        // $('.js-scroll-trigger').click(function() {
        //     $('.navbar-collapse').collapse('hide');
        // });
    });

    //Window scroll functions
    $window.on('scroll', function () {
        Obj.scrollFunction();
        //Obj.scrNav();
    });

    //Window resize functions
    $window.on('resize', function () {
        
    });

})(jQuery);


//When the user clicks on the button, scroll to the top of the document
function topFunction() {
     $('html, body').animate({scrollTop:0}, 'slow');
}


$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a.js-scroll-trigger').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').animate({
            scrollTop: $target.offset().top - 70
        }, 500, function () {
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('a.js-scroll-trigger').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if ((refElement.position().top - 80) <= scrollPos && (refElement.position().top - 80) + (refElement.height() + 1000) > scrollPos) {
            $('a.js-scroll-trigger').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}