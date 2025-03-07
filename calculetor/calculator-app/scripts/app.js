// JavaScript code for the calculator functionality

let currentInput = '';
let operator = '';
let firstOperand = null;

const display = document.getElementById('display');
const secondaryDisplay = document.getElementById('secondary-display');

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function chooseOperator(op) {
    if (currentInput === '') return;
    if (firstOperand !== null) {
        calculate();
    }
    operator = op;
    firstOperand = parseFloat(currentInput);
    secondaryDisplay.value = `${firstOperand} ${operator}`;
    currentInput = '';
}

function calculate() {
    let result;
    const secondOperand = parseFloat(currentInput);
    if (isNaN(firstOperand) || isNaN(secondOperand)) return;
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }
    currentInput = result;
    operator = '';
    firstOperand = null;
    secondaryDisplay.value = '';
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput;
}

function clear() {
    currentInput = '';
    operator = '';
    firstOperand = null;
    secondaryDisplay.value = '';
    updateDisplay();
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
    secondaryDisplay.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function changeLanguageMode() {
    const languageMode = document.getElementById('language-mode').value;
    switch (languageMode) {
        case 'en':
            display.style.backgroundColor = '#ffffff';
            display.style.color = '#000000';
            secondaryDisplay.style.backgroundColor = '#ffffff';
            secondaryDisplay.style.color = '#000000';
            break;
        case 'es':
            display.style.backgroundColor = '#ffeb3b';
            display.style.color = '#000000';
            secondaryDisplay.style.backgroundColor = '#ffeb3b';
            secondaryDisplay.style.color = '#000000';
            break;
        case 'fr':
            display.style.backgroundColor = '#2196f3';
            display.style.color = '#ffffff';
            secondaryDisplay.style.backgroundColor = '#2196f3';
            secondaryDisplay.style.color = '#ffffff';
            break;
        default:
            display.style.backgroundColor = '#ffffff';
            display.style.color = '#000000';
            secondaryDisplay.style.backgroundColor = '#ffffff';
            secondaryDisplay.style.color = '#000000';
            break;
    }
}

// Event listeners for buttons
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => appendNumber(button.innerText));
});

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => chooseOperator(button.innerText));
});

document.getElementById('equals').addEventListener('click', calculate);
document.getElementById('clear').addEventListener('click', clear);
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
document.getElementById('language-mode').addEventListener('change', changeLanguageMode);