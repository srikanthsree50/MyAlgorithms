function BubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<(arr.length-i-1);j++){
if(arr[j] > arr[j+1]){
    const lesser = arr[j+1];
    arr[j+1] = arr[j];
    arr[j] = lesser;

}
        }
    }
    return arr;
}

function SelectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let indexOfMin = i;
        for(let j=i+1;j<arr.length;j++){
if(arr[j] < arr[indexOfMin]){
    
indexOfMin =j;
}
 }
 if(indexOfMin !== i){
    let lesser = arr[indexOfMin];
    arr[indexOfMin] = arr[i];
    arr[i] = lesser;
 }

 }
    return arr;
}

function MergeSort(arr){
if(arr.length === 1){
    return arr;
}

const center = Math.floor(arr.length/2);
const left = arr.slice(0,center);
const right = arr.slice(center);

return merge(MergeSort(left),MergeSort(right))

}

function merge (left,right){
    const results = [];
    while(left.length && right.length){
if(left[0] < right[0]){
results.push(left.shift())
}else{
results.push(right.shift())
}
}
return [...results,...left,...right];
}

console.log(BubbleSort([7,6,5,4,3,2,1]));

console.log(SelectionSort([7,6,5,4,3,2,1]));

console.log(merge([4,5,6,7],[1,2,3]))

console.log(MergeSort([4,5,6,7,1,2,3]))