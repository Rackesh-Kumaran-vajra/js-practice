// advance array method:

//flat() -> Flatten nested arrays:
// const a = [1,2,[3,4]];
// console.log(a.flat());

/* here we used the depth value because then only we have can able to flat all the 
all the values in the array . so because we are having the 2 rows 
*/
// const arr2 = [1,2,[3,4,[5,6]]];
// console.log(arr2.flat(2));


// flat map method:(combine mapping and flattening)
// const sentences = ['hello world', 'how are you'];
// const words = sentences.flatMap(sentence => sentence.split(' '));
// console.log(words);
// let a = words.flatMap(word => word.split(""));
// console.log(a);


//findIndex() -> return the index of the first element that satisfies a given condition.
// const nums = [10,20,30,40,30]
// let a = nums.findIndex(n => n==30);
// console.log(a);


// every() - checks if all elements in an array pass a given test.

// const scores = [80,45,90];
// let a = scores.every(s => s>=50);
// console.log(a);


// includes() - check whether a given value exists in the array or string.

// const fruits = ['apple','banana','grape'];
// let a = fruits.includes('banana');
// console.log(a);


// const names = 'rackesh';
// let a = names.includes('c');
// console.log(a);




