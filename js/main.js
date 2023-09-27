

$(document).ready(function(){

    // menu bg changer js
    $(window).scroll(function(){
        if($(this).scrollTop()>150){
            $(".menu").addClass("menu-bg")
        }else {
            $(".menu").removeClass("menu-bg")
        }
    })


    //  scrollTop hide & show js script 
   $(window).scroll(function(){
    if ($(this).scrollTop() > 120) {
        $(".scrollTop").fadeIn(1000)
    } else {
        $(".scrollTop").fadeOut(1000)
    }
   })

    // counter up js
    jQuery(document).ready(function($){
        $('.counter').counterUp({
          delay: 10,
          time: 1000
      });
      });

    // AOS animation js
    AOS.init();

})



