function doesintersect(a1, a2, b1, b2) {
    if( isBetween(a1[0], a2[0], b1[0], b2[0]) && isBetween(a1[1], a2[1], b1[1], b2[1]) ) {
        return true;
    }
    return false;
}

function isBetween(a, b, c, d) {
    return (c >= a && c <= b) || (d >= a && d <= b);
}

/*
console.log(
    doesintersect(
        // [0,0], [2,2],
        // [1,1], [3,3]

        // [0,0], [2,2],
        // [3,0], [5,2]

        [0,0], [2,2],
        [2,0], [4,4]
    )
);
*/

module.exports = doesintersect;