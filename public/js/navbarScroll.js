$(function() {
  $(document).ready(function(){ //On doc load do the navbar thing since ppl could refresh mid page.
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
      $(".sticky").addClass("stickyadd");
    } else {
      $(".sticky").removeClass("stickyadd");
    }
  });
  $(window).on('scroll', function() {  //On scroll do the navbar thing
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
      $(".sticky").addClass("stickyadd");
    } else {
      $(".sticky").removeClass("stickyadd");
    }
  });
});
