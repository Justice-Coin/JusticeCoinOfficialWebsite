$(function() {
  $(document).on('scroll', function() {  //On scroll do the navbar thing
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
      $(".sticky").addClass("stickyadd");
    } else if (scroll < 1 && !$("#navbarCollapse").attr('class').split(" ").includes("show")) {
      $(".sticky").removeClass("stickyadd");
    }
  });


});
