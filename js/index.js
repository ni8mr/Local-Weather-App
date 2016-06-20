$(document).ready(function() {
  // calculating body width for styling
  var body_width = $("body").width();
  var header_width = $('header').width();
  // Styling header
  $('header').css('margin-left',(body_width - header_width)/2);

});