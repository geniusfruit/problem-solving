var Heap = function(){
    this.items = [];
};

function swap(arr, indexA, indexB) {
    var temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
}

function getParent (index) {
    return Math.floor((index + 1) / 2) - 1;
}

function getLeftChild (index) {
    return 2 * index + 1;
}

function getRightChild(index) {
    return 2 * index + 2;
}

Heap.prototype.push = function(v){
    this.items.push(v);

    var lastItemIndex = this.items.length - 1;

    while( lastItemIndex > 0 ) {
        var parentIndex = getParent(lastItemIndex);
        if( this.items[parentIndex] < v ){
            swap(this.items, parentIndex, lastItemIndex);
        }
        lastItemIndex = parentIndex;
    }

};

Heap.prototype.popMax = function(){
    var lastItemIndex = this.items.length - 1;

    var retVal = this.items[0];

    swap(this.items, lastItemIndex, 0);

    this.items.pop();
    lastItemIndex-=1;
    var curItemIndex = 0;

    while( curItemIndex < lastItemIndex ) {
        var leftChildIndex = getLeftChild(curItemIndex);
        var rightChildIndex = getRightChild(curItemIndex);
        var toSwapIndex = -1;

        if(this.items[leftChildIndex] > this.items[curItemIndex]){
            toSwapIndex = leftChildIndex;
        }

        if(this.items[rightChildIndex] > this.items[curItemIndex] && this.items[rightChildIndex] > this.items[leftChildIndex]) {
            toSwapIndex = rightChildIndex;
        }

        if(toSwapIndex > -1) {
            swap(this.items, curItemIndex, toSwapIndex);
        }
        else {
            break;
        }
    }

    return retVal;

};

// var heap = new Heap();
// heap.push(0);
// heap.push(2);
// heap.push(3);
// heap.push(1);
//
// heap.popMax();

module.exports = Heap;