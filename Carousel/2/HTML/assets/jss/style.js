jQuery(document).ready(function($){
    $(".carousel-area").owlCarousel({
       items: 1,
       loop: true,
       dots: true,
       nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        autoplay: true,
    });
});

