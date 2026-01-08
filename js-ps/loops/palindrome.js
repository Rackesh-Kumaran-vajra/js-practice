// Check whether a number is a palindrome.

let n = 123;
let original = n;
let rev = 0;

while(n>0){
    let ld = n%10;
    rev = rev*10+ld;
    n = Math.floor(n/10);
}


if(original === rev){
    console.log(rev + ' palindrome');
}
else{ 
    console.log(rev + ' not palindrome');
}
