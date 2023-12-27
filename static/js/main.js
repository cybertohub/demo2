(function($) {
    'use strict';

//Toggle Nav for mobile  menu
    $('.menu-toggle').click(function(){
        $('.menu-wrapper').toggleClass('active-nav');
    });


    //Toggle Nav for mobile menu
$('.open_bar').click(function(){
$('nav').addClass('active-nav');
$('.menu-toggle').addClass('closee');
});
$('.close_bar').click(function(){
$('nav').removeClass('active-nav');
$('.menu-toggle').removeClass('closee');
});

$(document).ready(function(){
    $('.venobox').venobox(); 
});

    


    $('.testi-slider2').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1500,
        nav:false,
        dots: false,
        navText: ["<i class='fas fa-angle-left''></i>", "<i class='fas fa-angle-right''></i>"],
        items:1,
    });
 



// blog slider

      $('.blog-slider').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        smartSpeed: 1500,
        dots:false,
        nav: false,
        navText: ["<i class='fas fa-angle-left''></i>", "<i class='fas fa-angle-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    });

(function($) {
    'use strict';
    
    // Mobile Menu
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu",
        onePage: false,
    }); 
    
})(jQuery);



    //=====< barfiller script >====
        $('#bar1').barfiller({
            duration: 7000
        });
        $('#bar2').barfiller({
            duration: 7000
        });
        $('#bar3').barfiller({
            duration: 7000
        });
        $('#bar4').barfiller({
            duration: 7000
        });
        $('#bar5').barfiller({
            duration: 7000
        });


  // Counter Up =========
jQuery(document).ready(function( $ ) {

    $('.counter').counterUp({
            time: 4000
    });

});


        /* Portfolio Isotope  */
    $('.image_load').imagesLoaded(function() {

        if ($.fn.isotope) {

            var $portfolio = $('.image_load');

            $portfolio.isotope({

                itemSelector: '.grid-item',

                filter: '*',

                resizesContainer: true,

                layoutMode: 'masonry',

                transitionDuration: '0.8s'

            });
            $('.menu-filtering li').on('click', function() {

                $('.menu-filtering li').removeClass('current_menu_item');

                $(this).addClass('current_menu_item');

                var selector = $(this).attr('data-filter');

                $portfolio.isotope({

                    filter: selector,

                });

            });

        };

    });

    


   // Loder  //
    $(function () {
        $('body').addClass('loaded');
    });

         
    
         //Header Search
    if($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function() {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function() {
            $('body').removeClass('search-active');
        });
    }


// sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky-nav');
        } else {
            sticky.addClass('sticky-nav');
        }
    });

// scroll strat============================

		 $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 300) $('.go-top').addClass('active');
        if (scrolled < 300) $('.go-top').removeClass('active');
    });

    $('.go-top').on('click', function () {
        $("html, body").animate({
            scrollTop: "0"
        }, 1200);
    });





$('.tilt-effect').tilt({
maxTilt: 20,
perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
scale: 1, // 2 = 200%, 1.5 = 150%, etc..
speed: 300, // Speed of the enter/exit transition.
transition: true, // Set a transition on enter/exit.
disableAxis: null, // What axis should be disabled. Can be X or Y.
reset: true, // If the tilt effect has to be reset on exit.
glare: false, // Enables glare effect
maxGlare: 1 // From 0 - 1.
});


$("#to-top").click(function(){
$('html , body').animate({scrollTop :0},800)
});

// to wow Jquery
new WOW().init();
    

	
})(jQuery);


// Gear progress
// -----------------


$(".circle_percent").each(function () {
  var $this = $(this),
    $dataV = $this.data("percent"),
    $dataDeg = $dataV * 3.6,
    $round = $this.find(".round_per");
  $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
  $this.append(
    '<div class="circle_inbox"><span class="percent_text"></span></div>'
  );
  $this.prop("Counter", 0).animate(
    { Counter: $dataV },
    {
      duration: 2000,
      easing: "swing",
      step: function (now) {
        $this.find(".percent_text").text(Math.ceil(now) + "%");
      }
    }
  );
  if ($dataV >= 51) {
    $round.css("transform", "rotate(" + 360 + "deg)");
    setTimeout(function () {
      $this.addClass("percent_more");
    }, 1000);
    setTimeout(function () {
      $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
    }, 1000);
  }
});


// =======< accordion js >========
        $(".accordion > li:eq(0) a").addClass("active").next().slideDown();
        $('.accordion a').on('click', function (j) {
            var dropDown = $(this).closest("li").find("p");

            $(this).closest(".accordion").find("p").not(dropDown).slideUp();

            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
            } else {
                $(this).closest(".accordion").find("a.active").removeClass("active");
                $(this).addClass("active");
            }

            dropDown.stop(false, true).slideToggle();

            j.preventDefault();
        });




 // Sidebar
    
    "use strict";
        jQuery(document).ready(function (o) {
            0 < o(".offset-side-bar").length &&
                o(".offset-side-bar").on("click", function (e) {
                    e.preventDefault(), e.stopPropagation(), o(".cart-group").addClass("isActive");
                }),
                0 < o(".close-side-widget").length &&
                    o(".close-side-widget").on("click", function (e) {
                        e.preventDefault(), o(".cart-group").removeClass("isActive");
                    }),
                0 < o(".navSidebar-button").length &&
                    o(".navSidebar-button").on("click", function (e) {
                        e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
                    }),
                0 < o(".close-side-widget").length &&
                    o(".close-side-widget").on("click", function (e) {
                        e.preventDefault(), o(".info-group").removeClass("isActive");
                    }),
                o("body").on("click", function (e) {
                    o(".info-group").removeClass("isActive"), o(".cart-group").removeClass("isActive");
                }),
                o(".xs-sidebar-widget").on("click", function (e) {
                    e.stopPropagation();
                }),
                0 < o(".xs-modal-popup").length &&
                    o(".xs-modal-popup").magnificPopup({
                        type: "inline",
                        fixedContentPos: !2,
                        fixedBgPos: !0,
                        overflowY: "auto",
                        closeBtnInside: !2,
                        callbacks: {
                            beforeOpen: function () {
                                this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
                            },
                        },
                    });
            });