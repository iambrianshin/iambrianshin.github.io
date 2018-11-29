$(document).ready(function() {

/* Navigation scroll */

  $('.js--section-about').waypoint(funciton(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px;'
  });



  $(function() {
    $('.js-nav a, .js-connect').click(function(e) {
      e.preventDefault();
      $('body, html').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 750);
    });
  });
