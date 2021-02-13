
$(window).on('load', function() {
  if(document.URL.match("http://www.photoexists.net/")){
       
    $('.top-picture').stop().animate({opacity:'1'},3000);
    $('.title-icon').stop().animate({opacity:'1'},3000);

    $(window).scroll(function (){
      $('.list').each(function(){
          var targetElement = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > targetElement - windowHeight + 200){
              $(this).css('opacity','1');
              $(this).css('transform','translateY(0)');
          }
      });
    });
  }
});