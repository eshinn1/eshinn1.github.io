$(document).ready(function() {
  console.log("we loaded");

$("h1").click("click", function() {
  alert("Hey!");
  $(this).css("background-color", "red");
});



$( "h1" ).css("color", "purple");
$( "h1" ).addclass("big-text");


} );

$("#ingredients").click("click", function(){
  $(this).css("background-color", "white");
});

$( "p" )
.mouseover( function() {
$("p")
.css("font-size", "21px");

} );

$( "p" )
.mouseleave( function() {
  $( "p" )
  .css("background-color", "white" );
  $( "p" )
  .css( "font-size", "16px" );
} );

$("#final").fadeIn(8000);

} );
