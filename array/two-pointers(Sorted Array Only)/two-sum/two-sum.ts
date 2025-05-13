function twoSum(arr: number[], target: number): number[] {
    let i = 0;
    let j = arr.length - 1;

    while(i < j){
        if(arr[i] + arr[j] == target)
            return [i, j];
        else if(arr[i] + arr[j] > target)
            j--;
        else
            i++
    }

    return [-1, -1];
}

const numList = [1,2,3,5,7,10,11,15];
console.log(twoSum(numList, 15));