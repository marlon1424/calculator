let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldResetScreen = false;

const numberButtons = document.querySelectorAll("[data-number]");
const operaterButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.getElementById('equalsBtn');
const clearButton = document.getElementById('clearBtn');
const lastOperationScreen = document.getElementById("lastOperationScreen");
const currentOperationScreen = document.getElementById("currentOperationScreen");

equalsButton.addEventListener('click', evaluate);
clearButton.addEventListener('click', clear);

numberButtons.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.textContent))
);

operaterButtons.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent))
);

function appendNumber(number) {
    if(currentOperationScreen.textContent === '0' || shouldResetScreen){
        resetScreen();
    }
    currentOperationScreen.textContent += number;
}

function resetScreen() {
    currentOperationScreen.text = '';
    shouldResetScreen = false;
}

function clear() {
    currentOperationScreen.textContent = '';
    lastOperationScreen.textContent = '';
    firstOperand = '';
    secondOperand = '';
    currentOperation = null;
}

function setOperation(operator){
    firstOperand =  currentOperationScreen.textContent;
    currentOperation = operator;
    lastOperationScreen.textContent = `${firstOperand} ${currentOperation}`;
    currentOperationScreen.textContent = '';
    shouldResetScreen = true;
    if (currentOperation !== null) {
        evaluate();
    }
}

function evaluate(){
    if (currentOperation === null || shouldResetScreen){
        return 
    } 
    
    secondOperand = currentOperationScreen.textContent;
        currentOperationScreen.textContent = roundResult(
            operate(currentOperation, firstOperand, secondOperand));
    lastOperationScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`;
    currentOperation = null;

}

function roundResult(number) {
    return Math.round(number * 1000) / 1000;
}


function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator){
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '×':
            return multiply(a, b);
        case '÷':
            if (b === 0) return null
            else return divide(a, b);
        default:
            return null;
    }
}
