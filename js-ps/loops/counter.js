//Write a JavaScript program to count the number of digits in a number.

let n = 12345 , count = 0;

while(n>0){
    n = Math.floor(n/10);
    count++;
}

console.log(count);