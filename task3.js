// Write a function to check if a string is a palindrome

var str1 = "abcdcba";


function isPalindrome(str){
    let start = 0;
    let end = str.length - 1;
    while (start < end){
        if(str[start] != str[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}


if (isPalindrome(str1)){
    console.log("Palindrome");
}
else console.log("Not a Panlindrome");

