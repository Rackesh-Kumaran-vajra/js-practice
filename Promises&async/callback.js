/*

callback function:
in js - you can also pass a function as an argument to a function. this function that is
passed as an argument inside of another function is called a callback function.

*/

function greet(name,callback){
    
    console.log('hi' + ' '+ name);
    callback();

    
}

function callMe(){
    console.log('im a callback function');
}

greet('peter', callMe);  //  -> send the function as the parameter to the another function

