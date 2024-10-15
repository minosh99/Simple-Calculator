// Get the display element
const display = document.getElementById('display');

// Initialize the current and previous values
let currentInput = "";
let operator = null;
let previousInput = "";

// Get all buttons
const buttons = document.querySelectorAll('.btn');

// Add event listeners to each button
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        const value = button.getAttribute('data-value');

        // If "C" is clicked, clear the display
        if (value === "C") {
            currentInput = "";
            previousInput = "";
            operator = null;
            display.value = "";
        }
        // If "=" is clicked, calculate the result
        else if (value === "=") {
            if (previousInput && operator && currentInput) {
                const result = calculate(previousInput, currentInput, operator);
                display.value = result;
                previousInput = result;
                currentInput = "";
            }
        }
        // If an operator is clicked, store the operator and the current value
        else if (["+", "-", "*", "/"].includes(value)) {
            if (currentInput) {
                previousInput = currentInput;
                currentInput = "";
                operator = value;
            }
        }
        // For numbers or "." (decimal), append to the current input
        else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});

// Calculation function
function calculate(a, b, op) {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    switch (op) {
        case '+':
            return numA + numB;
        case '-':
            return numA - numB;
        case '*':
            return numA * numB;
        case '/':
            return numA / numB;
        default:
            return 0;
    }
}
