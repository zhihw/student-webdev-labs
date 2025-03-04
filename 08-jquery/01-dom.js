$(document).ready(function() {
  $('#copy').on('click', function(event) {
    console.log('click event', event);
    $('#output1').text($('#userInput1').val());
  });
  $('#userInput2').on('input', function(event) {
    console.log('input event', event);
    $('#output2').text($(this).val());
  });
});