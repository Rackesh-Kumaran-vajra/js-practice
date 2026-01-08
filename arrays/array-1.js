

// normal array declaration:
// let colors = ['red','blue','green',1,2,3,true,{firstname:"logesh"}];

// using the new array class:
// let a = new Array('red','blue','add');
// console.log(a);

// accessing the array values:
// let a = new Array('red','blue','green');
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);


// accessing the values from the array and update that values:
// let a = new Array('red','blue','green');
// a[0]='yellow';
// console.log(a[0]);


// how to find the size of the array:
// let a = new Array('red','blue','green');
// console.log(a.length);

// if(a.length > 0){
//     console.log('we have colors')
// }


// push method (adding the new value in the array but it is add in the last one):
// let colors = ['red','blue','green'];
// colors.push('yellow');
// console.log(colors);


// now we have to change the postion of the value from the one place to another place:
// using the unshift keyword:(we can add the new values in the first postion itself )
// let colors = ['red','blue','green'];
// colors.unshift('yellow');
// console.log(colors);

// pop method (its removes the last value from the array):
// let colors = ['red','blue','green'];
// colors.pop();
// console.log(colors);

// shift method (its removes the first value from the array):
// let colors = ['red','blue','green'];
// colors.shift();
// console.log(colors);


// to get the index of the array:

// let colors = ['red','blue','green']
// console.log(colors.indexOf('green'));


// forEach method :

// let numbers = [1,2,3];
// numbers.forEach(function(element){
//     console.log(element * 2);
// })




// array map method:

// const products = ['beans','pizza','chicken','salmon'];
// products.map( (el)=>{ console.log(el+' *');} );


// const prices = [2,5,7,16,50,38];
// const discountAmount = 1;
// const discountPrices = prices.map((price) => {console.log(price - discountAmount)});

// console.log(discountPrices);





// array - filter method:

// var numbers = [1,3,6,8,11];
// var greaterthan_7 = numbers.filter((number)=>{
//     return number > 7;
// });

// console.log (greaterthan_7);

// filter with object array :

// var creatures = [
//     {name: 'shark', habitat: "ocean"},
//     {name: 'whale', habitat:'ocean'},
//     {name:'lion', habitat:'savana'},
//     {name:'monkey',habitat:'jungle'}
// ];

// const aqautic_creatures = creatures.filter((creature) => {return creature.habitat == 'ocean';})
// console.log(aqautic_creatures);


// array - find method():

// let numbers = [10,20,30,40,50];

// var n = numbers.find((number)=>{
//     return number > 20 ;
// });

// console.log(n);


// array some method :
// let numbers = [5,10,15,20];

// var a = numbers.some((el)=>{
//     return el > 10 ;
// });

// console.log(a);


// array reduce method :
// const numbers = [1,2,3,4];

// let res = numbers.reduce((acc,current)=>{
//     return acc+current;
// },0)


// console.log(res)



