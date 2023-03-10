function quickSort(arr, left, right) {
    var len = arr.length,
        partitionIndex,
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len - 1 : right;

    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}

function partition(arr, left, right) {     // 分区操作
    var pivot = left,                      // 设定基准值（pivot）
        index = pivot + 1;
    for (var i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, index - 1);
    return index - 1;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(quickSort([3,2,1,5,6,4]))

// function quickSort(arr,left,right){
//     let length = arr.length;
//     let L = left ? left : 0;
//     let partitionIndex
//     let R = right ? right : length - 1;

//     if(L < R){
//         partitionIndex = partition(arr,L,R);
//         quickSort(arr,L,partitionIndex-1)
//         quickSort(arr,partitionIndex+1, R)
//     }
//     return arr
// }

// function partition(arr,left,right){
//     let pivot = left;
//     let index = pivot + 1;
//     for(let i = index ;i<right;i++){
//         if(arr[i] < arr[pivot]){
//             swap(arr,i,index)
//             index++
//         }
//     }
//     swap(arr,pivot,index -1)
//     return index-1
// }

// function swap(arr,left,right){
//     let temp = arr[left];
//     arr[left] = arr[right]
//     arr[right] = temp
// }

// console.log(quickSort([3,2,1,5,6,4]))