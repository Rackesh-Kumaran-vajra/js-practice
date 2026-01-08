// Count how many even and odd digits are in a number.

let n = 12345;
let even = 0;
let odd = 0;

while(n>0){
    let digit = n%10;

    if(digit % 2 == 0){
        even++;
    }
    else{
        odd++;
    }

    n = Math.floor(n/10);
}

console.log('even count : '+ even)
console.log('odd '+ odd);