$(document).on('turbolinks:load', function() {
  // Append query parameter for search
  $('.search-button').click(function(e) {
    let query = $('.search-input').val();

    if (query.length) {
      $(this).attr('href', "/search?query=" + query); 
    } else {
      e.preventDefault();
    }
  });

  // Fix for font awesome + turbolinks
  FontAwesome.dom.i2svg();

  // Glitch grayscale on logo hover
  $('.glitch').on('mouseover', function() {
    $('body').addClass('grayscale');
  }).on('mouseout', function() {
    $('body').removeClass('grayscale');
  });
});