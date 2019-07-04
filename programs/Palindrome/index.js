function palindrome (str) {
    str.split('').every((char,i) => {
        return char === str[str.length - i - 1];
    })
   }
   
   console.log(palindrome('abb'))


// function palindrome (str) {
//  const reversed = str.split('').reverse().join('')
 
//  return str === reversed;
// }

// console.log(palindrome('abb'))