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

function quicksort(arr, first, last) {
    if(first < last) {
        let new_pivot = partition(arr, first, last);
        quicksort(arr, 0, new_pivot - 1);
        quicksort(arr, new_pivot + 1, last);
    }
}


let input = [5, 1, 2, 3, 4];
quicksort(input, 0, input.length - 1);
console.log(input);
