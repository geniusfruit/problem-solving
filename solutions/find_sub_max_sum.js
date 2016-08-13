function findSubMax(arr) {
    var curr_max = arr[0], max_so_far = arr[0];

    for(var i = 1; i < arr.length; i++) {
        curr_max = Math.max(arr[i], curr_max + arr[i]);
        max_so_far = Math.max(max_so_far, curr_max);
    }

    return max_so_far;
}

// console.log(findSubMax([2,3, -2, -2, 7]));

module.exports=findSubMax;

