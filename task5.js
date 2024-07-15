// Sort an array of numbers in ascending order.

var arr1 = [10,3,20,4,5,1]

function sortArray(arr){
    let swap = false;
    for(let i = 0; i < arr.length ; i++){
        swap = false;
        for(let j = 0; j < arr.length - i -1; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swap = true;
            }
        }
        if (swap == false) break;
    }
}

sortArray(arr1);
console.log(arr1);