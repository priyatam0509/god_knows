/*============================================================
    Sticky Navigation
============================================================*/


$(document).ready(function(){
   /* Sticky Navigation
  -------------------------------------------------------*/
  $(window).scroll(function(){
    // alert(1);

    var windowWidth = $(window).width();
    if ($(window).scrollTop() > 190 & windowWidth > 974){
      $('#sticky-nav').addClass("sticky");
    //   $('#sticky-nav .logo-wrap').addClass("shrink");
    } else {
      $('#sticky-nav').removeClass("sticky");
    //   $('#sticky-nav .logo-wrap').removeClass("shrink");
    }

    if ($(window).scrollTop() > 200 & windowWidth > 974){
      $('#sticky-nav').addClass("offset");
    } else {
      $('#sticky-nav').removeClass("offset");
    }

    if ($(window).scrollTop() > 500 & windowWidth > 974){
      $('#sticky-nav').addClass("scrolling");
    } else {
      $('#sticky-nav').removeClass("scrolling");
    }


    if ($(window).scrollTop() > 190 ){
      $('.navbar-fixed-top').addClass("sticky");
    } else {
      $('.navbar-fixed-top').removeClass("sticky");
    }

  }); 
});


//jQuery(window).scroll(function () {
//        if (jQuery(window).scrollTop() >200) {
//            jQuery("#navigation").css("background-color","#fff");
//            jQuery("#navigation").addClass("animated-nav");
//        } else {
//            jQuery("#navigation").css("background-color","transparent");
//            jQuery("#navigation").removeClass("animated-nav");
//        }
//    });


/*============================================================
    .navbar-responsive
============================================================*/


        (function($) {
$.fn.menumaker = function(options) {  
 var cssmenu = $(this), settings = $.extend({
   format: "dropdown",
   sticky: false
 }, options);
 return this.each(function() {
   $(this).find(".button").on('click', function(){
     $(this).toggleClass('menu-opened');
     var mainmenu = $(this).next('ul');
     if (mainmenu.hasClass('open')) { 
       mainmenu.slideToggle().removeClass('open');
     }
     else {
       mainmenu.slideToggle().addClass('open');
       if (settings.format === "dropdown") {
         mainmenu.find('ul').show();
       }
     }
   });
   cssmenu.find('li ul').parent().addClass('has-sub');
multiTg = function() {
     cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
     cssmenu.find('.submenu-button').on('click', function() {
       $(this).toggleClass('submenu-opened');
       if ($(this).siblings('ul').hasClass('open')) {
         $(this).siblings('ul').removeClass('open').slideToggle();
       }
       else {
         $(this).siblings('ul').addClass('open').slideToggle();
       }
     });
   };
   if (settings.format === 'multitoggle') multiTg();
   else cssmenu.addClass('dropdown');
   if (settings.sticky === true) cssmenu.css('position', 'fixed');
resizeFix = function() {
  var mediasize = 1000;
     if ($( window ).width() > mediasize) {
       cssmenu.find('ul').show();
     }
     if ($(window).width() <= mediasize) {
       cssmenu.find('ul').hide().removeClass('open');
     }
   };
   resizeFix();
   return $(window).on('resize', resizeFix);
 });
  };
})(jQuery);

(function($){
$(document).ready(function(){
$("#cssmenu").menumaker({
   format: "multitoggle"
});
});
})(jQuery);




// Slider Height
    var slideHeight = $(window).height();
    $('#home-carousel .carousel-inner .item, #home-carousel .video-container').css('height',slideHeight);

    $(window).resize(function(){'use strict',
        $('#home-carousel .carousel-inner .item, #home-carousel .video-container').css('height',slideHeight);
    });




/*============================================================
    wow-js
============================================================*/

 wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        mobile: false
    });
    wow.init();







/*============================================================
    owl-item-Slider
============================================================*/

$(document).ready(function() {

      var owl = $("#owl-demo");

      owl.owlCarousel({ 
        itemsCustom : [
          [0, 1],
          [450, 2],
          [600, 2],
          [700, 2],
          [1000, 3],
          [1200, 3],
          [1400, 4],
          [1600, 4]
        ],
        items : 3,
        lazyLoad : true,
        navigation : true,
        pagination : false,
      });
$( ".owl-prev").html('<i class="fa fa-chevron-left fa-2x"></i>');
 $( ".owl-next").html('<i class="fa fa-chevron-right fa-2x"></i>');
    });



/*============================================================
    signup-js
============================================================*/