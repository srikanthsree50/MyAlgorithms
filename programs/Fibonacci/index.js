
function slowFib(n){

if(n<2){
    return n;
}
return slowFib(n-1) + slowFib(n-2)                //AVOID RUNTIME COMPLEXITY
}

function memoize(fn){
    const cache = {};
    return function(...args)
    {
if(cache[args]){
    return cache[args];
}

const result = fn.apply(this,args);
cache[args] = result;

return result;
    };
}

const fib = memoize(slowFib);

console.log(fib(4))




// function Fibonacci(n){
//     const result =[0,1];
//     for(let i=2;i<=n;i++){
// const a = result[i-1];
// const b = result[i-2];
// result.push(a+b);
//     }
//     return result[n];
// }
// console.log(Fibonacci(4));