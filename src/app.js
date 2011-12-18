var LCDDisplay = function() {};

LCDDisplay.prototype.output = function(n) {
  var oneOutline = [" ", "|", "|", "|", "|"];
  var twoOutline = ["__", "   |", " __|", "|","|__"];

  var numbers = {"1": oneOutline, "2": twoOutline}
  var numbersToOutput = n.split("");
  var result = "";

  for(var i = 0; i < 5; i++) {
    for(var k = 0; k < numbersToOutput.length; k++) {
      var arr = numbers[numbersToOutput[k]];
      result += arr[i] + " ";
    }

    result = result.replace(/\s$/, "") + "\n";
  }

  console.log(result);
}
