//http://www.mycodeschool.com/problems/circle-intersection

function intersect(ra, rb, d) {
    if(Math.min(ra, rb) >= d) {
        // one inside other
        return false;
    }
    return (ra + rb) >= d;
}

// console.log( intersect(4,8,2) );

module.exports = intersect;
