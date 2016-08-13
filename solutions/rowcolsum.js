// http://www.mycodeschool.com/problems/row-or-column-sum

function getRowColSum(n, x, type, where) {
    let result = 0, start = 0;
    if(type === 'row') {
        start = (where - 1) * x;
        for(var i = 1; i <= x; i++) {
            start + i <= n && (result+=(start + i));
        }
    }
    else {
        start = where;
        result = 0;
        while(start <= n) {
            result+=start;
            start = start + x;
        }
    }
    return result;
}


// console.log(getRowColSum(5, 2, 'row', 2));
module.exports = getRowColSum;