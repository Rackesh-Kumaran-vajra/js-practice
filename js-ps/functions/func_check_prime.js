// Create a function to check if a number is Prime.


function isPrime(num){
    if(num <= 1){
        return false;
    }

    for(let i=2;i<num;i++){
        if(num%i == 0){
            return false;
        }
    }
    console.log(num);
    return true;
}

console.log(isPrime(7));