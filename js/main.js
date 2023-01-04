(function($){
    "use strict";


    $(document).ready(function(){

        $('.product-list').masonry();


        $('.homepage-slides').owlCarousel({
            items:1,
            nav:true,
            autoplay: false,
            loop: true,
            dots: false,
            navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
        });


        $('.product-promotions').owlCarousel({
            items:1,
            nav:false,
            autoplay: true,
            loop: true,
            dots: true,
            /* navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"] */
        });


        $(".menu-trigger").on("click", function(){
            $(".off-canvas-menu, .off-canvas-overlay").addClass("active");
            return false;
        });

        $(".menu-close, .off-canvas-overlay").on("click", function(){
            $(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
        });



        $(".search-trigger").on("click", function(){
            $(".latest-menu, .off-canvas-overlay").addClass("active");
            return false;
        });

        $(".menu-close, .off-canvas-overlay").on("click", function(){
            $(".latest-menu, .off-canvas-overlay").removeClass("active");
        });





    });

    
  


}(jQuery));





