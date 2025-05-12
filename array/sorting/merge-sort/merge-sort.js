function mergeSort(arr, start, end) {
    if (start < end) {
        var mid = start + Math.floor((end - start) / 2);
        mergeSort(arr, start, mid);
        mergeSort(arr, mid + 1, end);
        merge(arr, start, mid, end);
    }
}
function merge(arr, start, mid, end) {
    var temp = [];
    var i = start;
    var j = mid + 1;
    // Push compireable
    while (i <= mid && j <= end) {
        if (arr[i] <= arr[j]) {
            temp.push(arr[i]);
            i++;
        }
        else {
            temp.push(arr[j]);
            j++;
        }
    }
    // Push remaining left
    while (i <= mid) {
        temp.push(arr[i]);
        i++;
    }
    // Push remaining right
    while (i <= mid) {
        temp.push(arr[j]);
        j++;
    }
    // Sort original array
    temp.forEach(function (n, i) { return arr[start + i] = n; });
}
var ListToSort = [12, 21, 35, 8, 1, 3, 45, 0, 14];
mergeSort(ListToSort, 0, ListToSort.length - 1);
console.log("Sorted List =>  ", ListToSort);
