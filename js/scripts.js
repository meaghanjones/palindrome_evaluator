var palindromeTrue = function(input) {
  var backIndex = input.length;
  for (index = 0; index < input.length ; index += 1 ) {
    backIndex -= 1;
    if (input[index] !== input[backIndex]) {
      return false;
    }
  }
  return true;
};



$(document).ready( function() {
  $("button").click(function() {
    var inputString = $("form input").val();
    answer = palindromeTrue(inputString);
    $(".output").text(answer);
  });
});
