
function getDigitsOfNumber(num) {
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        console.log('You entred incorrect value');
        return {};
    }

    return {
        units: num % 10,
        hundereds: Math.floor(num / 100),
        tens: Math.floor(num / 10) % 10,
    };
}

console.log(getDigitsOfNumber(777));