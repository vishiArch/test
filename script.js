// Select all input fields
let inputFieldOne = document.querySelector('.input-field');
let inputFieldTwo = document.querySelector('.input-field2');

// Select the button with class 'opera'
let operator = document.querySelector('.opera');

let BUTTON = document.querySelector('.btn');

function calculator(){
    // Get the values from the input fields
    let value1 = parseInt(inputFieldOne.value);
    let value2 = parseInt(inputFieldTwo.value);

    // Get the operator from the button
    let operatorValue = operator.value;

    // Perform the calculation based on the operator
    
    switch (operatorValue) {
        case '+':
            result = value1 + value2;
            break;
        case '-':
            result = value1 - value2;
            break;
        case '*':
            result = value1 * value2;
            break;
        case '/':
            result = value1 / value2;
            break;
        default:
            result = 'Invalid operator';
    }

    // Display the result in an alert
    // alert('The result is: ' + result);
}
calculator();