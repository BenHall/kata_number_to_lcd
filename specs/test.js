module("LCD Display - Output");

var logOutput = undefined
QUnit.begin = function() {
  window.console.log = function(output) { 
    logOutput = output;
  };
}

test("Number 1", function() {
  var d = new LCDDisplay();
  d.output(1);

  equals(logOutput, "\n" + 
                    "|\n" +
                    "|\n" + 
                    "|\n"+
                    "|\n");
});

test("Number 2", function() {
  var d = new LCDDisplay();
  d.output(2);

  equals(logOutput, "__\n" +
                    "   |\n" +
                    " __|\n" +
                    "|\n" +
                    "|__\n");
});
