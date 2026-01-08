/*Print the Fibonacci series up to N terms. */

let n = 7;
let a = 0;
let b = 1;

console.log(a);
console.log(b);
for(let i=3;i<=n;i++){
    next = a+b;
    console.log(next);
    a = b;
    b = next;
}

