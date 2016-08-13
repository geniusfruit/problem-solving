function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function partition(arr, left, right) {
    let done = false, pivot = left;
    left = left + 1;

    while(!done) {

        while(arr[left] <= arr[pivot] && left <= right) {
            left++;
        }

        while(arr[right] >= arr[pivot] && right >= left) {
            right--;
        }

        if(left > right) {
            done = true;
        }
        else {
            swap(arr, left, right);
        }

    }

    if(done) {
        swap(arr, pivot, right);
    }
    return right;

}

let result = null;

function kthMin(arr, first, last, k) {
    if(first < last) {
        let new_pivot = partition(arr, first, last);
        if(new_pivot === k - 1) {
            this.result = arr[new_pivot];
        }
        else {
            kthMin(arr, 0, new_pivot - 1, k);
            kthMin(arr, new_pivot + 1, last, k);
        }
    }
    return this.result;
}

function kthMax(arr, first, last, k) {
    if(first < last && last > k) {
        let new_pivot = partition(arr, first, last);
        if(new_pivot === arr.length - k) {
            result = arr[new_pivot];
        }
        else {
            kthMax(arr, 0, new_pivot - 1, k);
            kthMax(arr, new_pivot + 1, last, k);
        }
    }
}

module.exports = kthMin;