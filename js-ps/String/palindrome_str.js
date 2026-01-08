// palindrome string: madam <-> madam

let text = 'madam';
let rev = '';

for(i=text.length-1;i>=0;i--){
    rev = rev+text[i];

}

console.log('madam <->  : ' + rev);

