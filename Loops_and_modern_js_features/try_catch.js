// error handling:
// try catch block - method for error handling:

/*

try{
    let result = add(10,20);
    console.log(result);
    console.log('bye');
}

catch(e){
    console.log({name: e.name,message:e.message})
}
console.log('bye');

*/

// try catch finally (handle the error):

/*
let result  = 0 ;

try{
    result = add(10,20);
    console.log(result);
    console.log('bye');
}

catch(e){
    console.log({name: e.name,message:e.message})
}
finally{
    console.log(result);
}

console.log('bye');

*/


// try catch final (handle the without error):

/*

let result = 0;

function add(a,b){
    return a*b;
}

try{
    result = add(10,20);
    console.log(result);
}
catch(e){
    console.log({name:e.name,message:e.message});

}
finally{
    console.log({result});
}
console.log('Bye');

*/