// http://www.mycodeschool.com/problems/check-balanced-parantheses-in-an-expression

function balance(input) {
    let opens = ["{", "("];
    let closs = ["}", ")"];
    let match = {"}": "{", ")": "("};

    let stack = [];
    input.split('').map(function (char) {
        if(opens.indexOf(char) > -1)
            stack.push(char);
        if(closs.indexOf(char) > -1 && stack[stack.length - 1] == match[char])
            stack.pop();
    });

    return stack.length === 0;
}

//console.log(balance("{3+(2+5)}"));

module.exports = balance;
