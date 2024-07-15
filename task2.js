//Create an array of strings and print the longest string.

var str = ["I am a student at FAST NUCES", "My CGPA is 3.57", "I am doing internship at Analyzinn Solutions and I am enjoying it so far"];

var longeststr = "";
var longest = Number.MIN_SAFE_INTEGER;
for(let i = 0; i < str.length; i++){
    if(str[i].length > longest){
        longest = str[i].length;
        longeststr = str[i];
    }
}

console.log("The longest string: " + longeststr);