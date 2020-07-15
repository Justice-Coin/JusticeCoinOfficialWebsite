// Redirects to Thanks For Downloading page after downlaod button clicked
$(function(){
  $("#download").on("click", function(){
    // setTimeout(function(){
      location.href="/downloadComplete";
    // }, 1000);
  });
});
