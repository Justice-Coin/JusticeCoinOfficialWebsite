$(function() {
  $(window).on('scroll', function() {  //On scroll do the navbar thing
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
      $(".sticky").addClass("stickyadd");
    } else {
      $(".sticky").removeClass("stickyadd");
    }
  });
});
