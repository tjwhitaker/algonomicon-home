$(document).on('turbolinks:load', function() {
  // Fix for font awesome + turbolinks
  FontAwesome.dom.i2svg();

  // Glitch grayscale on logo hover
  $('.glitch').on('mouseover', function() {
    $('body').addClass('grayscale');
  }).on('mouseout', function() {
    $('body').removeClass('grayscale');
  });
});