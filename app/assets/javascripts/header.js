$(document).ready(function() {
  $('.glitch').on('mouseover', function() {
    $('header').addClass('grayscale');
  }).on('mouseout', function() {
    $('header').removeClass('grayscale');
  });
});