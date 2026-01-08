// spread_operartor:

/*

const arr = [1,2,3]
const newArr = [ ...arr,4,5];

console.log(newArr);

*/


/*
const obj1 = {name:'J',age:25};
const obj2 = {...obj1,city:'delhi'};

console.log(obj2);

*/

// Rest parameter:
/*
const [first,...rest] = [1,2,3,4,5];
console.log(first);
console.log(rest);

*/

/*
const {a,...rest} = {a: 1,b: 2,c: 3};
console.log(a);
console.log(rest);

*/

// destructuring:

/* array destructuring:


// this is the normal method:
const numbers = [1,2,3]
const num = numbers[0];
console.log(num);

// using the destructuring concept:
const n = [1,2,3];
const[a,b,c] = n;

console.log(a,b,c);

*/

// object destructuring :

/*
const person = {name : 'john', age:24};

const {name,age} = person;

console.log(name);

*/


// Nested Destructuring :

/*
const data = { user: {id:1, email:'j@example.com'}};

const {user: {id , email} } = data;

console.log(id);
*/

// Optional Chaining -> ? check the whether it is there or not:
const user1 = {address:{street:'1st main road'}};

console.log(user1.address);
console.log(user1.address?.street);

