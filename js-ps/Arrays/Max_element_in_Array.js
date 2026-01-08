// Find the largest number in an array.

let n = [5,2,3,4,1];
let max = n[0];

for(let i=1;i<n.length;i++){
    if(n[i]>max){
        max = n[i];
    }
}
console.log(max);