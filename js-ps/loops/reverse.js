// Reverse a given number.

let num = 5678 , rev = 0;

while(num > 0){
    let ld = num % 10;
    rev = rev*10+ld;
    num = Math.floor(num/10);
}

console.log('reverse  :  ' + rev);
