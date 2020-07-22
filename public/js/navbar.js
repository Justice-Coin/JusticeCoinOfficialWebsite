$(function() {
  $(document).on('scroll', function() {  //On scroll do the navbar thing
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
      $(".sticky").addClass("stickyadd");
    } else if (scroll < 1 && !$("#navbarCollapse").attr('class').split(" ").includes("show")) {
      $(".sticky").removeClass("stickyadd");
    }
  });

  $("#menu-button").on("click", function() {
    var classes = $("#navbarCollapse").attr('class').split(" ");
    if (!classes.includes("show")) {
        $(".sticky").addClass("stickyadd");
    } else {
      if ($(window).scrollTop() < 1) {
        $(".sticky").removeClass("stickyadd");
    }}
  });

});
