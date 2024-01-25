let result = "";
let currentOperator = 0;

const DISPLAY = document.querySelector("#display");

const numbers = document.querySelectorAll(".numbers");
for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', (e) => updateDisplay(e.target.textContent));
}
const operators = document.querySelectorAll(".operators");
for(let i = 0; i < operators.length; i++){
    operators[i].addEventListener('click', (e) => operatorClick(e.target.textContent));
}

document.querySelector("#equals").addEventListener('click', 
    () => operate(result, DISPLAY.textContent, currentOperator));

const OPERATOR ={
    none: 0,
    add: 1,
    subtract: 2,
    multiply: 3,
    divide: 4
}

function reset(){
    result = "";
    secondNumber = "";
    currentOperator = 0;
    updateDisplay("");    
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
    return b == 0 ? "You stoopid" : a / b;
}

function operate(numberA, numberB, operator){
    numberA = Number(numberA);
    numberB = Number(numberB);
    switch(operator){
        case OPERATOR.add:
            result = add(numberA, numberB)
            break;
        case OPERATOR.subtract:
            result = subtract(numberA, numberB)
            break;
        case OPERATOR.multiply:
            result = multiply(numberA, numberB)
            break;
        case OPERATOR.divide:
            result = divide(numberA, numberB)
            break;
    }

    resetDisplay();
    updateDisplay(result);
}

function operatorClick(operator){
    if(DISPLAY.textContent.length === 0) return;
    switch(operator){
        case '+':
            currentOperator = OPERATOR.add;
            break;
        case '-':
            currentOperator = OPERATOR.subtract;
            break;
        case 'x':
            currentOperator = OPERATOR.multiply;
            break;
        case '/':
            currentOperator = OPERATOR.divide;
            break;
    }
    if(result.length === 0)
        result = DISPLAY.textContent;
    resetDisplay();
}

function resetDisplay(){
    DISPLAY.textContent = '';
}

function updateDisplay(val){
    if(val != '0')DISPLAY.textContent += val;
}