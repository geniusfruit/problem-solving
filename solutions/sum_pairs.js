function allPairs(arr, k){
    var map = {};
    var result = [];

    arr.map((v, i)=>{
        var other = k - v;
        if(map[other])
            result.push([v, other]);
        map[v] = true;
    });
    
    return result;
}

// another algorithm is
// 1. sort the array
// 2. Have two pointers rear and front
// if rear + front == sum return
// if rear + front < sum then front++
// if rear + front > sum then rear--

// console.log(allPairs([4,6,8,2,1,7,3], 10));

module.exports = allPairs;