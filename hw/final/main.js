$(document).ready(function() {
  console.log("we loaded");

  $("h1").click("click", function() {
    alert("Welcome to my blog post!");
    $(this).css("background-color", "white");
  });

  $( "h1" ).css("color", "red");
  $( "h1" ).addClass("big-text");

  $("h1").click(function() {
    $("h1").html("<em>From Noob to Pilot</em>");
  });

  $( "p" )
  .mouseover( function() {
  $("p")
  .css("font-size", "30px");

});

  $(".grid-img").fadeIn(8000);

});



$( "nav" )
.mouseover( function() {
$("nav")
.css("font-size", "20px");


});
