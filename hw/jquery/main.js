$(document).ready(function() {
  console.log("we loaded");

$( "h1" ).css("color", "purple");

$( "#button1")
.click( function() {
  alert("www.google.com");

  $( "h1" )
  .addclass("big-text");


} );

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
}
