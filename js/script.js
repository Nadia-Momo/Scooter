var typed =new Typed(".auto-type",{

    strings:["THE FUTURE.","THE SYSTEM.","THE BIKE."],
    typeSpeed:150,
    backSpeed:150,
    loop:true
});

  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:1000
  });

  AOS.init();

  $('.counter').counterUp({
    delay: 100,
    time: 1000
});
// colors slider
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  arrows:false
});
		
$('.my_slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow:'<i class="fa-solid arrows prr fa-arrow-left"></i>',
    nextArrow:'<i class="fa-solid arrows nrr fa-arrow-right"></i>'
});