// script.js
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");

let currentInput = "";
let operator = null;
let previousInput = "";

// Add event listeners to buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "+" || value === "-" || value === "*" || value === "/") {
      if (currentInput !== "") {
        previousInput = currentInput;
        currentInput = "";
        operator = value;
      }
    } else if (value === "=") {
      if (previousInput !== "" && currentInput !== "" && operator) {
        currentInput = calculate(previousInput, currentInput, operator);
        previousInput = "";
        operator = null;
      }
    } else {
      currentInput += value;
    }

    display.value = currentInput;
  });
});

// Clear button functionality
clearButton.addEventListener("click", () => {
  currentInput = "";
  previousInput = "";
  operator = null;
  display.value = "";
});

// Calculation logic
function calculate(num1, num2, operator) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
    case "+":
      return (num1 + num2).toString();
    case "-":
      return (num1 - num2).toString();
    case "*":
      return (num1 * num2).toString();
    case "/":
      return num2 !== 0 ? (num1 / num2).toString() : "Error";
    default:
      return "Error";
  }
}
