//  Palindrome Number
/*
    Given an integer x, return true if x is a 
    palindrome
    , and false otherwise.
*/


function isPalindrome(num){
    if(num < 0 || num % 10 == 0 && num != 0){
        return false;
    }

    let reverseNum = 0;

    while(num > reverseNum){
        reverseNum = reverseNum * 10 + num % 10;
        num = Math.floor(num / 10);        
    }
    return (reverseNum == num || num == (Math.floor(reverseNum/10)));
}

console.log(isPalindrome(121));
