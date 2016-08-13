//convert number from one base to another
// http://stackoverflow.com/a/38734086
// careful about hexadecimal did not cover and left for exercise

function convertBase(num, base1, base2) {
    num = num + '';
    var decEquivalent = convertToDecimal(num, base1);
    return convertToBaseFromDec(decEquivalent, base2);
}

function convertToDecimal(num, base) {
    let power = 0, value = 0;
    while(num) {
        let digit = num % 10;

        if(digit > base)
            throw new Error('Invalid number in given base.');

        num = Math.floor(num / 10);
        value+= digit * Math.pow(base, power);
        power++;
    }
    return value;
}

function convertToBaseFromDec(num, base) {
    let result = "";
    while(num) {
        result+= num % base;
        //careful about hexadecimal
        num = Math.floor(num / base);
    }
    return result.split('').reverse().join('');
}

console.log( convertBase(10001, 2, 10) );

