// Write a function to reverse a number.

function reverse(n){
    let rev = 0;

    while(n>0){
        rev = rev*10+(n%10);
        n = Math.floor(n/10);
    }
    return rev;
}


console.log(reverse(1234));