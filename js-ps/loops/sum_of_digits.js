// Find the sum of digits of a number.

let n = 1234;
let sum = 0;

// for(let i=0;i<=3;i++){
//     sum = sum + (n%10);
//     n = Math.floor(n/10)
// }
// console.log(sum);

while(n>0){
    sum = sum + (n%10);
    n = Math.floor(n/10);
}

console.log('sum of digits of a number : '+ sum);