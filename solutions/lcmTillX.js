function gcd(a, b){
    if(a === 0)
        return b;
    else if(b === 0)
        return a;
    return gcd(b, a % b);
}

function lcm(a, b){
    return (a * b) / gcd(a, b);
}
function lcmTillX(X){
    var _lcm = 1;
    for(var i = 1; i <= X; i++)
        _lcm = lcm(_lcm, i);
    return _lcm;
}

// console.log(lcmTillX(5));

module.exports = lcmTillX;