// Count how many even and odd numbers are in an array.

let n = [1,2,3,4,5,6];

let even_count = 0;
let odd_count = 0;


for(let i=0;i<n.length;i++){
    if(n[i]%2==0){
        even_count++;
    }
    else{
        odd_count++;
    }
}

console.log('even: '+ even_count);
console.log('odd: '+odd_count);



