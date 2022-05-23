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

  $('.popular-slider-container').slick({
    nextArrow: false,
    prevArrow: false,
    // infinite: true,
    prevArrow:false,
    nextArrow:false,
    dots: false,
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
    autoplaySpeed:4000,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 5
        }
      },
      {
        breakpoint: 991,
        settings: {
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 574,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '90px',
          slidesToShow: 2
        }
      }
    ]
  });
  

  $(window).scroll(function(){
    var headSticky = $('.header-pos-container'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 1) headSticky.addClass('header-shadow');
    else headSticky.removeClass('header-shadow');
  });
 
  $(document).ready(function() {
    $(".slick-dots li button").text(" ");
 });

 $(document).on('click', '.burger-lines ', function(){
  $('.burg-menu').toggleClass('active-burger');
  $('.burger-lines').toggleClass('active-close');
  $('body').toggleClass('fix');
  $(window).scrollTop(0)
});

 $(document).on('click', '.bottom-navbar ul li ', function(){
  $(this).addClass('colored').siblings().removeClass('colored');
});

$(document).on('click', '.close-btn', function(){
  $(".search-input").val(""); 
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
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#search-list .product-list-item").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var tabFancy = document.getElementById("tab-fancy");
  expandImg.src = imgs.src;
  tabFancy.href = imgs.src;
  expandImg.parentElement.style.display = "block";
}


$(document).ready(function() {
  var list = document.querySelectorAll(".list-ul li");
  for(var i = 0; i<list.length; i++){
    if($(list[i]).children().length<3){
      $(list[i]).children("span").css("display", "none");
    }
}
});


$(document).on('click', '.list-ul li > span', function(){
  const $item = $(this).closest('.list-ul li');
  if (!$item.hasClass('opened')) { 
        $item.parents('ul').first().children().removeClass('opened');
        $item.addClass('opened');
  } 
  else{
    $item.removeClass('opened');
  }

});

//  $(document).on('click', '.list-ul li  span', function(){
//   const item = $(this).closest('.list-ul li');
//    for(var i = 0; i < item.length; i++){
//     $(item[i]).toggleClass('opened');                             
//     $(item[i]).siblings().removeClass("opened");
//    }

// });

 