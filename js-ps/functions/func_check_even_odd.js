// Write a function that checks whether a number is Even or Odd.

function checkEvenOdd(num){
    if(num%2==0){
        return 'even';
    }
    else{
        return 'odd';
    }
}

let a = checkEvenOdd(2);
console.log(a);