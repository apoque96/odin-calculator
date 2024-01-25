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

document.querySelector("#clear").addEventListener('click',
    () => reset());

document.querySelector("#del").addEventListener('click',
    () => del())

document.querySelector("#sign").addEventListener('click', function(){
    DISPLAY.textContent = (Number(DISPLAY.textContent) * - 1).toString();
});

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
    DISPLAY.textContent = "";    
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

function del(){
    const val = DISPLAY.textContent.substring(0, DISPLAY.textContent.length-1);
    resetDisplay();
    updateDisplay(val);
}

function operate(numberA, numberB, operator){
    numberA = Number(numberA);
    numberB = Number(numberB);
    switch(operator){
        case OPERATOR.add:
            result = Number(add(numberA, numberB).toFixed(6));
            break;
        case OPERATOR.subtract:
            result = Number(subtract(numberA, numberB).toFixed(6));
            break;
        case OPERATOR.multiply:
            result = Number(multiply(numberA, numberB).toFixed(6));
            break;
        case OPERATOR.divide:
            result = Number(divide(numberA, numberB).toFixed(6));
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