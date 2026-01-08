// Check whether a given number exists in an array.

let n = [1,2,3,4,5];
let search = 3;
let found = false


for(let i=0;i<n.length;i++){
    if(n[i] == search){
        found = true;
        break;
    }
}

if(found){
    console.log('found');
}
else{
    console.log('not found');
}



