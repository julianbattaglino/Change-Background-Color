$(window).on("scroll touchmove", function() {

  if ($(document).scrollTop() >= $("#intro").position().top) {
    $('body').css('background', $("#intro").attr("data-color"));
  };

  if ($(document).scrollTop() >= $("#1").position().top) {
    $('body').css('background', $("#1").attr("data-color"));
  };

  if ($(document).scrollTop() > $("#2").position().top) {
    $('body').css('background', $("#2").attr("data-color"))
  };

  if ($(document).scrollTop() > $("#3").position().top) {
    $('body').css('background', $("#3").attr("data-color"))
  };

  if ($(document).scrollTop() > $("#4").position().top) {
    $('body').css('background', $("#4").attr("data-color"))
  };

  if ($(document).scrollTop() > $("#5").position().top) {
    $('body').css('background', $("#5").attr("data-color"))
  };

  
});