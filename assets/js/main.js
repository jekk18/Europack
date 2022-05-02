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

  
  $(document).ready(function() {
    $(".slick-dots li button").text(" ");
 });


 $(document).on('click', '.bottom-navbar ul li ', function(){
   console.log("click")
  $(this).addClass('colored').siblings().removeClass('colored');
});