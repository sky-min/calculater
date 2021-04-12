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

function back(){
  var exp = document.getElementById('display').value;
  document.getElementById('display').value = exp.substring(0,exp.length - 1);
}

oEle1.readOnly = true ;
oEle2.readOnly = true ;
