$(document).ready(function() {
    // Nav-slider
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        navText: ['Prev' , 'Next'],
        items:1,
        smartSpeed:1000,
        responsive:{
            0:{
                nav:false,
            },
            768:{
                nav:true,
            },
        }
    })

    // Project-slider
   
    $('#project-slider').owlCarousel({
        loop:true,
        margin:24,
        nav:false,
        dots: true,
        smartSpeed:1000,
        responsive:{
            0:{
                nav:false,
                items:1,
            },
            768:{
                nav:true,
                items:2,
            },
            1140:{
                items:3,
                center:true,
            },
        }
    })

    // Reviwe

    $('#reviwe-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        items:1,
        smartSpeed:800,
    })
});