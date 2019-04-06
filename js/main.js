// import 'bootstrap';
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