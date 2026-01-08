// Reverse a given string.

let text = 'world';
let rev = '';

for(let i=text.length-1;i>=0;i--){
    rev = rev + text[i];
    
}
console.log(rev);