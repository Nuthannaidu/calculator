let displayValue = '';
const display = document.getElementById('display');
function input(value) {
    if (value === '^2') {
        displayValue = `${Math.pow(Number(displayValue), 2)}`;
    } else {
        displayValue += value;
    }
    updateDisplay();
}
function clearDisplay() {
    displayValue = '';
    updateDisplay();
}
function updateDisplay() {
    display.innerText = displayValue || '0';
}
function calculate() {
    try {
        displayValue = displayValue.replace('%', '/100');
        displayValue = `${eval(displayValue)}`;
        updateDisplay();
    } catch (error) {
        display.innerText = 'Error';
    }
}
function backspace() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key)) {
        input(key);
    }
    if (key === '+' || key === '-' || key === '*' || key === '/') {
        input(key);
    }
    if (key === '.') {
        input('.');
    }
    if (key === 'Enter') {
        event.preventDefault(); 
        calculate();          
    }
    if (key === 'Backspace') {
        backspace();
    }
    if (key === '%') {
        input('%');
    }
    if (key === 's') {
        input('^2');
    }
});
