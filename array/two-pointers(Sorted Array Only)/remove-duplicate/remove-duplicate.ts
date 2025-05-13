function removeDuplicates(arr: number[]): number {
    let i = 0;
    for(let j = 1; j < arr.length; j++){
        if(arr[j] != arr[i]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
}

const sortedArray = [1,1,1,1,2,4,5,5,5,6,7,9,11,11,13];
console.log('length', removeDuplicates(sortedArray), 'Array', sortedArray);