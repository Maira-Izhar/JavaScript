// Write a function to reverse a string?

var str1 = "This is maira";


function Reverse(str){
   let finalstr = "";
    for(let i = str.length - 1; i >= 0; i--){
        finalstr+= str[i];
    }
    return finalstr;
}

console.log(Reverse(str1));
