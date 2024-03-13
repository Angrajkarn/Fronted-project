// Array to store calculation history
let calculationHistory = [];

// Function to display history
function showHistory() {
    const history = calculationHistory.join('\n');
    alert(history);
}

// Function to append history
function appendToHistory(expression, result) {
    const historyList = document.getElementById('history-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${expression} = ${result}`;
    historyList.appendChild(listItem);
}

// Function to append value to screen
function appendToScreen(value) {
    const screen = document.getElementById('screen');
    screen.value += value;
}

// Function to calculate result
function calculate() {
    let result;
    const screen = document.getElementById('screen');
    const expression = screen.value;
    try {
        result = eval(expression);
        screen.value = result;
        appendToHistory(expression, result); // Add the calculation to history
    } catch (error) {
        screen.value = 'Error';
    }
}

// Function to handle backspace
function backspace() {
    const screen = document.getElementById('screen');
    screen.value = screen.value.slice(0, -1);
}

// Function to clear screen
function clearScreen() {
    document.getElementById('screen').value = '';
}

// Memory functions
let memory = 0;

function memoryClear() {
    memory = 0;
}

function memoryRecall() {
    document.getElementById('screen').value += memory;
}

function memoryAdd() {
    memory += parseFloat(document.getElementById('screen').value);
}

function memorySubtract() {
    memory -= parseFloat(document.getElementById('screen').value);
}

// Advanced operations
function squareRoot() {
    const screen = document.getElementById('screen');
    screen.value = Math.sqrt(parseFloat(screen.value));
}

function power() {
    const screen = document.getElementById('screen');
    screen.value = Math.pow(parseFloat(screen.value), 2);
}

function sine() {
    const screen = document.getElementById('screen');
    screen.value = Math.sin(parseFloat(screen.value));
}

function cosine() {
    const screen = document.getElementById('screen');
    screen.value = Math.cos(parseFloat(screen.value));
}

function tangent() {
    const screen = document.getElementById('screen');
    screen.value = Math.tan(parseFloat(screen.value));
}

function logarithm() {
    const screen = document.getElementById('screen');
    screen.value = Math.log(parseFloat(screen.value));
}

function exponential() {
    const screen = document.getElementById('screen');
    screen.value = Math.exp(parseFloat(screen.value));
}

function pi() {
    const screen = document.getElementById('screen');
    screen.value += Math.PI;
}
