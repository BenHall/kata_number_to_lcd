var LCDDisplay = function() {};

LCDDisplay.prototype.output = function(n) {
  var oneOutline = ["", "|", "|", "|", "|"];
  var twoOutline = ["__", "   |", " __|", "|","|__"];

  var result = "";
  
  for(var i = 0; i < 5; i++) {
    if(n == 1) 
      result += oneOutline[i] + "\n";
    else
      result += twoOutline[i] + "\n";
  }

  console.log(result);
}
