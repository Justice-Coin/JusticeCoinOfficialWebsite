//jshint esversion:6

$(function() {

  const navBarHeight = 100;
  const faqClickers = document.getElementsByClassName("faqClicker");
  setTimeout(delayedFragmentTargetOffset, 10);

  for (let i = 0; i < faqClickers.length; i++) {
    faqClickers[i].addEventListener("click", function() {
      let offset = $('#faqPlace').offset();
      if (Math.abs(offset.top - window.scrollY - navBarHeight) > 1) {
        let scrollto = offset.top - navBarHeight; // minus fixed header height
        $('html, body').animate({
          scrollTop: scrollto
        }, 500);
      }
    });
  };

  $("#contactClicker").on("click", function() {
    let offset = $('#contactPlace').offset();
    if (Math.abs(offset.top - window.scrollY - navBarHeight) > 1) {
      let scrollto = offset.top - navBarHeight; // minus fixed header height
      $('html, body').animate({
        scrollTop: scrollto
      }, 500);
    }
  });

  $("#homeClicker").on("click", function() {
    let offset = $('#homePlace').offset();
    if (Math.abs(offset.top - window.scrollY - navBarHeight) > 1) {
      let scrollto = offset.top - navBarHeight; // minus fixed header height
      $('html, body').animate({
        scrollTop: scrollto
      }, 500);
    }
  });

  $("#route-beginnerClicker").on("click", function() {
    let offset = $('#route-beginnerPlaceCard').offset();
    if (Math.abs(offset.top - window.scrollY - navBarHeight) > 1) {
      let scrollto = offset.top - navBarHeight; // minus fixed header height
      $('html, body').animate({
        scrollTop: scrollto
      }, 500);
    }
  });

  $("#route-intermediateClicker").on("click", function() {
    let offset = $('#route-intermediatePlaceCard').offset();
    if (Math.abs(offset.top - window.scrollY - navBarHeight) > 1) {
      let scrollto = offset.top - navBarHeight; // minus fixed header height
      $('html, body').animate({
        scrollTop: scrollto
      }, 500);
    }
  });

  $("#route-advancedClicker").on("click", function() {
    let offset = $('#route-advancedPlaceCard').offset();
    if (Math.abs(offset.top - window.scrollY - navBarHeight) > 1) {
      let scrollto = offset.top - navBarHeight; // minus fixed header height
      $('html, body').animate({
        scrollTop: scrollto
      }, 500);
    }
  });

  $("#route-tryClicker").on("click", function() {
    let offset = $('#route-tryPlaceCard').offset();
    if (Math.abs(offset.top - window.scrollY - navBarHeight) > 1) {
      let scrollto = offset.top - navBarHeight; // minus fixed header height
      $('html, body').animate({
        scrollTop: scrollto
      }, 500);
    }
  });

  // add scroll offset to fragment target (if there is one)
  function delayedFragmentTargetOffset() {
    var offset = $(window.location.hash.concat('Place')).offset();
    if (offset) {
      var scrollto = offset.top - navBarHeight; // minus fixed header height
      $('html, body').animate({
        scrollTop: scrollto
      }, 500);
    }
  }
});
