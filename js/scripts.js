$(document).ready(function() {
  $("form#triangle").submit(function(event) {
  var side1 = parseInt($("#side1").val())
  var side2 = parseInt($("#side2").val())
  var side3 = parseInt($("#side3").val())

if (side1 === side2 && side2 === side3 && side3 === side1) {
  $('#equilateral').show();
  $('#isoceles').hide();
  $('#scalene').hide()
  $("#notTriangle").hide();
} else if (side1 === side2 && side2 !== side3) {
  $('#isoceles').show();
  $('#equilateral').hide();
  $('#scalene').hide();
  $("#notTriangle").hide();
} else if (side1 !== side2 && side2 !== side3) {
 $('#scalene').show();
 $('#isoceles').hide();
 $('#equilateral').hide();
 $("#notTriangle").hide();
} else {
  $("#notTriangle").show();
  $('#isoceles').hide();
  $('#equilateral').hide();
  $('#scalene').hide();
}
   event.preventDefault();
 });
});
