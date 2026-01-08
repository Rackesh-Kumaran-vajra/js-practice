// Write a JavaScript program to check whether a number is Prime.

let n = 7;
let isPrime = true;

if (n==0 || n==1){
    isPrime = false;
}
else{
    for(let i=2;i<=n-1;i++){
        if(n%i === 0){
            isPrime = false;
            break;
        }
    }
}

if(isPrime){
    console.log('prime number')
}
else{
    console.log('not a prime number');
}

