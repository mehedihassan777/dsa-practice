function quickSort(arr: number[], start: number, end: number): void {
  if (start < end) {
    const pivotIndex = partition(arr, start, end);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
  }
};

function partition(arr: number[], start: number, end: number): number {
  const pivot = arr[end];
  let idx = start - 1;
  // Move less than pivot left side
  for (let j = start; j < end; j++) {
    if (arr[j] <= pivot) {
      idx++;
      [arr[j], arr[idx]] = [arr[idx], arr[j]];
    }
  }
  // Swap pivot to its original position
  idx++;
  [arr[end], arr[idx]] = [arr[idx], arr[end]];
  return idx;
}

const ListToSort = [12,21,35,8,1,3,45,0,14];
quickSort(ListToSort, 0, ListToSort.length-1);
console.log('Sorted List =>  ', ListToSort);
