$('.main-slider').slick({
    nextArrow: false,
    prevArrow: false,
    // infinite: true,
    prevArrow:false,
    nextArrow:false,
    dots: true,
    autoplay:true,
    autoplaySpeed:4000
  });
  $('.news-slider').slick({
    prevArrow:$('#prev'),
    nextArrow:$('#next'),
    // infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:4000
  });
  
  $(document).ready(function() {
    $(".slick-dots li button").text(" ");
 });


 $(document).on('click', '.bottom-navbar ul li ', function(){
   console.log("click")
  $(this).addClass('colored').siblings().removeClass('colored');
});

$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});