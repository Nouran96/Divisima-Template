// Carousel functions
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        autoplay: true
    });
    
    var owl = $('.owl-carousel');

    $('.owl-prev').click(function(){
        owl.trigger('prev.owl.carousel');
    });

    $('.owl-next').click(function(){
        owl.trigger('next.owl.carousel');
    });

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
        if(el.hasClass('d-none')){
            el.removeClass('d-none');
        }
        else {
            el.addClass('d-none');
        }
    }
});
