// Carousel functions
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        autoplay: true
    });
});

var owl = $('.owl-carousel');

$('.owl-prev').click(function(){
    owl.trigger('prev.owl.carousel');
});

$('.owl-next').click(function(){
    owl.trigger('next.owl.carousel');
});

// Main Functions

/* Function to control nav bar visibility */
$('#menu').click(() => showElement($('#main-nav')));

$('#shoes').click(() => showElement($('#shoes > ul')));
$('#pages').click(() => showElement($('#pages > ul')));

function showElement(el) {
    if(el.hasClass('d-none')){
        el.removeClass('d-none');
    }
    else {
        el.addClass('d-none');
    }
}