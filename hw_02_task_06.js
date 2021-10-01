'use strict';

/**
 * function returns the right case
 * @param {number} num count of rubles as digit
 * @returns {string} word 'ruble' in right form
 */
function getCase(num) {
    let beforeLastDigit = getDigitBeforeLastDigit(num);
    if (beforeLastDigit == 1) {
        return 'рублей';
    }
    num = String(num);
    let lastNumber = Number(num.charAt(num.length - 1));
    switch (lastNumber) {
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            return 'rubles';
        case 1:
            return 'rub';
        case 2:
        case 3:
        case 4:
            return 'ruble'
    }
}

/**
 * function returns the penultimate number of a number or null
 * @param {number} num 
 * @returns {number|null}
 */
function getDigitBeforeLastDigit(num) {
    num = String(num);
    let digit = num.charAt(num.length - 2);
    if (digit !== "") {
        return Number(digit);
    }
    return null;
}

let money = parseInt(prompt('How much money do you want to depost?'));
alert(`Your amount ${money} ${getCase(money)} has been credited`);