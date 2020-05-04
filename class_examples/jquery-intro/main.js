$(document).ready(function() {
  //all js goes in here
  console.log("we loaded");

  $("#button1").click(function() {
    // $("#title").css("color", "#f9423a");
    // $("#title").css("font-size", "500px");
    $("#title").addClass("big-text");
  });

  $("#button2").click(function() {
    // stuff we put here will happen when you click button2.
    $("#title").removeClass("big-text");
  })

  $("p").mouseover(function() {
    $("p").css("font-size", "21px");
  });




});