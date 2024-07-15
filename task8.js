// Write a function that takes an array of numbers and returns the sum of all the even numbers in the array.

var arr1 = [4,3,2,1,3,5,6,8,9,10]

function sumEven(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            sum += arr[i];
        }
    }
    return sum;
}

console.log(sumEven(arr1));