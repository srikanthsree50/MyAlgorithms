
function StepShape(n,row = 0, stair=''){
    if(n === row){
        return;
    }
    if(n === stair.length){
        console.log(stair)
       return StepShape(n,row + 1);
    }

    if(stair.length <= row){
        stair += '#'
    }
    else{
        stair += ' ';
    }
    StepShape(n,row,stair);
}

StepShape(12)




// function StepShape(n){
//     for(let row=0;row<n;row++){
//         let stair = '';

//         for(let column=0;column<n;column++){
//             if(column<=row){
//                 stair += '#'
//             }
//             else{
//                 stair += ' '
//             }
//         }
//         console.log(stair);
//     }
// }

// StepShape(12)