/*
clear-timed-out:
the program executes a block of code after the specified time interval.if i need to stop the function we can use this clear-timed-out function.

clearTimedout(intervalID);

*/

// program to stop the setTimedout() method:

let count = 0;

function increasedCount(){
    count += 1;
    console.log(count);

}

let id = setTimeout(increasedCount,3000);
clearTimeout(id);
//console.log(id);
console.log('setTimedout is stopped.');



