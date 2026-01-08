// Write a JavaScript program to check whether a given year is a leap year.


let year = 2012;

if(year % 400 === 0){
    console.log(year + ' it is the leap year');
}
else if(year % 100 == 0){
    console.log(year + ' it is not a leap year');
}
else if(year % 4 == 0){
    console.log(year + ' it is the leap year');
}
else{
    console.log('it is not a leap year');
}

