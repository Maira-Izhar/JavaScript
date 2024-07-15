// Write a function to check if a number is even or odd.

var num = 10;

function CheckEven(n){
    if(n % 2 == 0){
        return true;
    }
    return false;
}

if(CheckEven(num)){
    console.log("Even");
}
else console.log("Odd");