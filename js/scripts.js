$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const shout1Input = $("input#shout1").val().toUpperCase();
    $(".shout1").text(shout1Input);

    $("#response").show();
  });
});