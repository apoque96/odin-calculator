let firstNumber = 0;
let secondNumber = 0;

const DISPLAY = document.querySelector("#display");

const numbers = document.querySelectorAll(".numbers");
for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', (e) => updateDisplay(e.target.textContent));
}

const OPERATOR ={
    none: 0,
    add: 1,
    subtract: 2,
    multiply: 3,
    divide: 4
}

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    b == 0 ? "You stoopid" : a / b;
}

function operate(numberA, numberB, operator){
    switch(operator){
        case OPERATOR.add:
            add(numberA, numberB)
            break;
        case OPERATOR.subtract:
            subtract(numberA, numberB)
            break;
        case OPERATOR.multiply:
            multiply(numberA, numberB)
            break;
        case OPERATOR.divide:
            divide(numberA, numberB)
            break;
    }
}

function updateDisplay(val){
    DISPLAY.textContent += val;
}