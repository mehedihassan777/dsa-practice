function binarySearch(arr: number[], start: number, end: number, target: number): number {
    // Brake point
    if(start == end){
        if(arr[start] == target)
            return start;
        else
            return -1;
    }

    const mid = start + Math.floor((end - start) / 2);
    if(arr[mid] == target)
        return mid;
    else if(arr[mid] > target)
        return binarySearch(arr, 0, mid, target);
    else
        return binarySearch(arr, mid + 1, end, target);
}

function optimizedBinarySearch(arr: number[], start: number, end: number, target: number): number {
    // Brake point
    if(start < end){
        const mid = start + Math.floor((end - start) / 2);
        if(arr[mid] == target)
            return mid;
        else if(arr[mid] > target)
            return binarySearch(arr, 0, mid, target);
        else
            return binarySearch(arr, mid + 1, end, target);
    }

    return -1;
    
}

const numberList = [-1,0,3,4,5,8,11,15,26,18,41];
console.log('Binary Search', binarySearch(numberList, 0, numberList.length - 1, 11));
console.log('Optimized Binary Search', optimizedBinarySearch(numberList, 0, numberList.length - 1, 11));