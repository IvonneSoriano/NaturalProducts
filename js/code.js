// My js
$(document).ready(function(){
    $('.slick').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows:true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              arrows:false
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: true,
              arrows: false
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
    window.onscroll = function() {stickymenu()};


function stickymenu() {
  if (window.pageYOffset > 50) {
    $('.site-header').addClass("sticky")
  } else {
    $('.site-header').removeClass("sticky");
  }
}
  });
  
  $('.toggle').click(function(){
    if($(".site-header").hasClass("overlay"))
    {
      // $('.toggle-img').attr("src","svg/menu.svg");
      $('nav').fadeOut(00);
      $('.close').removeClass('active');
      $('.open').removeClass('disable');
    }
    else{
      $('.toggle-img').attr("src","svg/cancel.svg");
      $('nav').fadeIn(800);
      $('.close').addClass('active');
      $('.open').addClass('disable');
    }
    
     $('.site-header').toggleClass("overlay");
    // $('nav').fadeIn();

    
  });