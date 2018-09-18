$(document).on('turbolinks:load', function() {
  
  $('.glitch').on('mouseover', function() {
    $('body').addClass('grayscale');
  }).on('mouseout', function() {
    $('body').removeClass('grayscale');
  });

  console.log('Devs wanted for hazardous journey. Small wages, bitter cold, long months of complete darkness, constant danger. Safe return doubtful. Honor and recognition in case of success.');
});