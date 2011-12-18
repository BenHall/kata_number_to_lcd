var LCDDisplay = function() {};

LCDDisplay.prototype.output = function(n) {
  var oneOutline = [" ", "|", "|", "|", "|"];
  var twoOutline = ["__", "   |", " __|", "|","|__"];

  var numbers = {1: oneOutline, 2: twoOutline}

  var result = "";
  
  for(var i = 0; i < 5; i++) {
    var arr = numbers[n];
    result += arr[i] + "\n";
  }

  console.log(result);
}
