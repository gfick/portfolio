$(document).ready(function(){

  $(document).ready(function(){
    $('.sidenav').sidenav();
    console.log('here');
  });

  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          document.getElementById("about-me").scrollIntoView(true);
      });
  });

});