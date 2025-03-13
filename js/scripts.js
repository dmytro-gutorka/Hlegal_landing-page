$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout: 6500,
    autoplaySpeed: 1000,
    loop: true,
    dots:true,
    responsive:{
        0: { 
            items: 1 
        },
        600: { 
            items: 2
        },
        1024: {
            items: 4 
        }
    }

})


