$(document).ready(function(){

  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
});

$(document).ready(function(){
  $('#js-about-me-btn').on('click',function (e) {
    e.preventDefault();
    setTimeout(function () {
       $("#working-knowledge").trigger("click");
    }, 700);    
  });
});