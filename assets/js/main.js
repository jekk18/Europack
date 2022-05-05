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

  $('.containers-slider').slick({
    prevArrow:$('#prev2'),
    nextArrow:$('#next2'),
    // infinite: true,
    slidesToShow: 6,
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

$(document).on('click', '.close-btn', function(){
  $(".search-input").val(" "); 
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




function myFunction(imgs) {
  
  var expandImg = document.getElementById("expandedImg");
  var tabFancy = document.getElementById("tab-fancy");
 
  expandImg.src = imgs.src;
  tabFancy.href = imgs.src;
   

  expandImg.parentElement.style.display = "block";
}