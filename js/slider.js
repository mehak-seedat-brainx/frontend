
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 0,
            }
        }
    ]
});
document.querySelectorAll('.slick-center + .slick-cloned').forEach((next) => {
    next.style.display='none';
});