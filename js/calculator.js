const Display = document.getElementById('display') ;
const Result = document.getElementById('result') ;

function add(char) {
    const before = Display.value;
    Display.value = before + char;
}

function onResult() {
    Result.value = eval(Display.value);
}

function reset() {
    Display.value = "";
    Result.value = "";
}

function back(){
    const before = Display.value;
    Display.value = exp.substring(0, before.length - 1);
}
