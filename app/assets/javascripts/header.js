$(document).ready(function() {
  $('.glitch').on('mouseover', function() {
    $('body').addClass('grayscale');
  }).on('mouseout', function() {
    $('body').removeClass('grayscale');
  });
});