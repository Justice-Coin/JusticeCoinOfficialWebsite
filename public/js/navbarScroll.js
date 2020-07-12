$(function() {
  $(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
      $(".sticky").addClass("stickyadd");
    } else {
      $(".sticky").removeClass("stickyadd");
    }
  });
});
