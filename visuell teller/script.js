let number = 1;

const display = document.getElementById("display");

function updateDisplay() {
    display.innerHTML = number;
    display.style.color = number < 0 ? "crimson" : "black";
}

function increase() {
    number++;
    updateDisplay();
}

function decrease() {
    number--;
    updateDisplay();
}

function multiply() {
    number = number * 2;
    updateDisplay();
}

function divide() {
    if (number !== 0) {
    number = number / 2;
    updateDisplay(); 
    }
}

