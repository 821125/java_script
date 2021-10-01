'use strict';

/**
 * function adds parameters a and b
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function addition(a, b) {
    return a + b;
}

/**
 * function subtraction parameters a and b
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function substraction(a, b) {
    return a - b;
}

/**
 * function divisions parameters a and b
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function divisions(a, b) {
    return a / b;
}

/**
 * function multiplication parameters a and b
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function multiplication(a, b) {
    return a * b;
}

/**
 * function performs mathematical calculations
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation ("+", "-", "/", "*")
 * @throws {Error} if entered invalid value
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return addition(arg1, arg2);
        case "/":
            return addition(arg1, arg2);
        case "*":
            return addition(arg1, arg2);
        default:
            throw new Error("Operation " + operation + " operation is not provided");
    }
}

console.log(mathOperation(52, 24, "+"));
console.log(mathOperation(52, 24, "-"));
console.log(mathOperation(52, 24, "/"));
console.log(mathOperation(52, 24, "*"));
console.log(mathOperation(52, 24, "lorem"));
