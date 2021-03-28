var oEle1 = document.getElementById('display') ;
var oEle2 = document.getElementById('result') ;

function add(char) {
    var display = document.getElementById('display'); 
    display.value = display.value + char;
}

function onResult() {
  var display = document.getElementById('display');
  var result = eval(display.value);
  document.getElementById('result').value = result;
}

function reset() {
    document.getElementById('display').value = "";
    document.getElementById('result').value = "";
}

oEle1.readOnly = true ;
oEle2.readOnly = true ;