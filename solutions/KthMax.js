var Heap = require('./heap');
Heap = new Heap();

function getMaxAt(arr, k) {
    arr.map(function (item) {
        Heap.push(item);
    });

    var result = Heap.popMax();

    for(var i = 1; i < k ; i++) {
        result = Heap.popMax();
    }

    return result;
}

// console.log(getMaxAt([1,4,6,2,3,8,7], 1));

module.exports = getMaxAt;

// another variant
// use QuickSelect algorithm
