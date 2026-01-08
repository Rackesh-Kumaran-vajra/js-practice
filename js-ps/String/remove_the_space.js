// remove the space from the strings:

let txt = 'hello world javascript';
let space = '';

for(let i=0;i<txt.length;i++){
    if(txt[i] !== ' '){
        space = space + txt[i];
    }
}

console.log(space);