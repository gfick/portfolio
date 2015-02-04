// Smooth srolling animation on click of a tags with ID href reference.
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

// Konami code activation
$( window ).konami();
$( window ).on('konami', function() {
  $(".fa").addClass("fa-spin");
});