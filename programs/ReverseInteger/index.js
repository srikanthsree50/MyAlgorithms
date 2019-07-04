function ReverseInt (num) {
const reversed = parseInt(num.toString().split('').reverse().join(''))
if(num<0){
    return reversed * Math.sign(num);
}
return reversed;
}

console.log(ReverseInt(-123))