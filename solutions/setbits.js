// http://www.mycodeschool.com/problems/count-number-of-set-bits

function setbits(n) {
    let count = 0;
    while(n > 0) {
        n = n&(n-1);
        count++;
    }
    return count;
}

//console.log(setbits(500086));

module.exports = setbits;