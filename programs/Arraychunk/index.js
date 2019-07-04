
function Arraychunk(array,size){
    const chunked = [];
let index = 0;
while(index < array.length){
    chunked.push(array.slice(index,index+size))
    index += size;
}
    return chunked;
}
console.log(Arraychunk([1,2,3,4,5],2));




// function Arraychunk(array,size){
//     const chunked = [];

//     for(let element of array){
//         const lastElement = chunked[chunked.length - 1];

//         if(!lastElement || lastElement.length === size){
//             chunked.push([element]);
//         }
//         else{
//             lastElement.push(element);
//         }
//     }
//     return chunked;
// }
// console.log(Arraychunk([1,2,3,4,5],2));