// Find the index of an element in an array.

var arr = [10,20,11,3,6]
var element = 20;
var flag = false;
for(let i = 0; i < arr.length; i++){
    if(element == arr[i]){
        console.log("index:" + (i+1));
        flag = true;
        break;
    }
}
if(flag == false) console.log("Element not found in the array");