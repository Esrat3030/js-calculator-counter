// ==========================================
// CALCULATOR FUNCTIONALITY
// ==========================================
const calcScreen = document.getElementById('calc-screen');

function pressKey(value) {
    if (calcScreen.value === '0' && value !== '.') {
        calcScreen.value = value;
    } else {
        calcScreen.value += value;
    }
}

function clearScreen() {
    calcScreen.value = '';
}

function executeCalc() {
    try {
        if (calcScreen.value !== '') {
            // Using Function constructor as a safer evaluation alternative
            let result = new Function('return ' + calcScreen.value)();
            calcScreen.value = result;
        }
    } catch (error) {
        calcScreen.value = 'Error';
    }
}

// ==========================================
// COUNTER FUNCTIONALITY
// ==========================================
let currentCount = 0;
const counterDisplay = document.getElementById('counter-display');

function updateCounter(amount) {
    currentCount += amount;
    counterDisplay.textContent = currentCount;
}

function resetCounter() {
    currentCount = 0;
    counterDisplay.textContent = currentCount;
}