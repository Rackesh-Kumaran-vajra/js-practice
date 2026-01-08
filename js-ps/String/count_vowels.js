// Count the number of vowels in a string. vowels = a,e,i,o,u

let text = 'javascript';
let count = 0;

for(let i=0;i<text.length;i++){
    let ch = text[i];

    if(
        ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'
    ){
        count++;
    }
}

console.log('count of the vowels : '+ count);