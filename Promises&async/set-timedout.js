// set timed out will execute the block of code after the specified time.

// setTimeout(function,milliseconds);

function greet(){
    console.log('hello world');
}

setTimeout(greet, 3000);
console.log('This message is shown first');

