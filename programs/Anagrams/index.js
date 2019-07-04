
function Anagrams(strA,strB)
{
return cleanString(strA) === cleanString(strB)
}

function cleanString(str)
{
return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join();
}

console.log(Anagrams('srika','ikars !'))



// function Anagrams(strA,strB)
// {
// const AcharMap = buildCharMap(strA);
// const BcharMap = buildCharMap(strB);

// if(Object.keys(AcharMap).length !== Object.keys(BcharMap).length){
//     return false;
// }
// for(let char in AcharMap){
//     if(AcharMap[char] !== BcharMap[char]){
//         return false;
//     }
// }
// return true;
// }

// function buildCharMap(str)
// {
// const charMap = {};
// for(let char of str.replace(/[^\w]/g,'').toLowerCase())
// {
//     charMap[char] = charMap[char] + 1 || 1;
// }
// return charMap;
// }

// console.log(Anagrams('srika','ikars !'))