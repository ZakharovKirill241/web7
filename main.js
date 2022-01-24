$(document).ready(function() {

    $('.gallery').slick({
        nextArrow: '<button type="button" class="slick-next"><img src="next.png" alt=""></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="prev.png" alt=""></button>',
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }],
    });
});