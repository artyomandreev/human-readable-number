module.exports = function toReadable (number) {
    const units = ['zero', 'one', 'two',  'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['' ,'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundred = 'hundred';

    let num = number;
    let digits = [];
    while (num > 0) {
        digits.push(num % 10);
        num = parseInt(num / 10);
    }
    digits.reverse();

    let result = '';

    if (digits.length === 3) {
        result = units[digits[0]] + ' ' + hundred;

        if (number % 100 !== 0) {
            if (digits[1] < 2) {
                result += ' ' + units[number - (digits[0] * 100)];
            } else if (digits[2] === 0) {
                result += ' ' + dozens[digits[1]];
            } else {
                result += ' ' + dozens[digits[1]] + ' ' + units[digits[2]];
            }
        }
    }

    if (digits.length === 2) {
        if (digits[0] < 2) {
            result = units[number];
        } else if (digits[1] === 0) {
            result = dozens[digits[0]];
        } else {
            result = dozens[digits[0]] + ' ' + units[digits[1]];
        }
    }

    if (digits.length === 1) {
        result = units[digits[0]];
    }

    if (number === 0) {
        result = units[number];
    }

    return result;
}
