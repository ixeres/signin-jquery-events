$(function() {

  $('.signin').click(function() {
    $('.modal').fadeIn()
  })
  $('.close').click(function() {
    $('.modal').fadeOut()
  })
  $('.submit').click(function() {
    $('input').error(function() {
    alert( "WARNING. DANGER WILL ROBINSON." )
  })
  .attr( 'placeholder', 'nu uh!' );
  })
  // Not sure where 'error' should be printing to? Modifies the placeholder, though. Can't seem to get it to drop the error, since I can't find it?
})
