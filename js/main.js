// Carousel functions
$(document).ready(function(){
    // Owl Carousel Options
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            490: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    
    var owl = $('.owl-carousel');

    $('.owl-prev').click(function(){
        owl.trigger('prev.owl.carousel');
    });

    $('.owl-next').click(function(){
        owl.trigger('next.owl.carousel');
    });

    // Show main nav bar on clicking of menu icon
    $('#menu').click(() => showElement($('#main-nav')));

    // Only use the click events in small and extra small screens
    $('#shoes').click(() => {
        if($(window).width() <= 768) {
            showElement($('#shoes > ul'));
        }
        else
            return;
    });

    $('#pages').click(() => {
        if($(window).width() <= 768) {
            showElement($('#pages > ul'));
        }
        else
            return;
    });

    // Only use the hover event in screens larger than medium
    $('#shoes').hover(() => {
        if($(window).width() > 768) {
            showElement($('#shoes > ul'));
        }
        else
            return;
    });

    $('#pages').hover(() => {
        if($(window).width() > 768) {
            showElement($('#pages > ul'));
        }
        else
            return;
    });

    // Main Functions

    /* Function to control elements visibility */
    function showElement(el) {
        el.toggleClass('d-none');
    }
});
