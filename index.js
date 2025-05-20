// calculator program

const display = document.getElementById("display");
let lastWasEqual = false;
let storedValue = "";

function appendToDisplay(input) {
    if (lastWasEqual && isOperator(input)) {
        display.value = storedValue + input;
        lastWasEqual = false;
    } else if (lastWasEqual && !isOperator(input)) {
        display.value = input;
        lastWasEqual = false;
    } else {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "";
    lastWasEqual = false;
    storedValue = "";
}

// Helper function to check if input is an operator
function isOperator(input) {
    return ['+', '-', '*', '/', '%'].includes(input);
}


function calculate() {
    try {
        display.value = eval(display.value);
        storedValue = display.value;
        lastWasEqual = true;
    } catch (error) {
        display.value = "Error";
        lastWasEqual = false;
    }
}

function negVal(){
    if(display.value = ""){
        display.value = "";
    }else {
        display.value = "-" + display.value;
    }
}

function prevAnswer(){
    display.value = display.value + storedValue;
}


