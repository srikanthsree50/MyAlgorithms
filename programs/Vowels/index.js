function FindVowels(str){
    const matches = str.match(/[aeiou]/gi)
    return matches ? matches.length : 0
}
console.log(FindVowels('hello there'));


// function FindVowels(str){
//     let count =0;
// const checker = ['a','e','i','o','u'];

// for(let char of str.toLowerCase()){
//     if(checker.includes(char)){
//         count++;
//     }
// }
// return count;
// }
// console.log(FindVowels('hello world'));