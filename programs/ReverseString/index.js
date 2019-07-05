
function reverse(str)
{
    return str.split('').reduce((rev,char) => char + rev ,'');
}
    
    console.log(reverse('string'))


// function reverse(str) {
//     let rev = '';
//     for(let character of str){
// rev = character + rev;
//     }
//     return rev;
//     }
    
//     console.log(reverse('string'))



//function reverse(str) {
//return str.split('').reverse().join('')
//}
// console.log(reverse('string'))
