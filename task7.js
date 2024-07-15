//Write a function to find the factorial of a number?

var num = 6;

function factorial(n){
    let result = 1;
    for(let i = n; i > 0; i--){
        result *= i;
    }
    return result;
}

console.log(factorial(num));