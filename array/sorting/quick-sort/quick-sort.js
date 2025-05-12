function quickSort(arr, start, end) {
    if (start < end) {
        var pivotIndex = partition(arr, start, end);
        quickSort(arr, start, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, end);
    }
}
;
function partition(arr, start, end) {
    var _a, _b;
    var pivot = arr[end];
    var idx = start - 1;
    // Move less than pivot left side
    for (var j = start; j < end; j++) {
        if (arr[j] <= pivot) {
            idx++;
            _a = [arr[idx], arr[j]], arr[j] = _a[0], arr[idx] = _a[1];
        }
    }
    // Swap pivot to its original position
    idx++;
    _b = [arr[idx], arr[end]], arr[end] = _b[0], arr[idx] = _b[1];
    return idx;
}
var ListToSort = [12, 21, 35, 8, 1, 3, 45, 0, 14];
quickSort(ListToSort, 0, ListToSort.length - 1);
console.log('Sorted List =>  ', ListToSort);
