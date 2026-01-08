// Find how many properties an object has.

let student = {
    name : 'ravi',
    age : 21,
    course: 'javascript'
};

let count = 0;

for(key in student){
    count++;
}

console.log(count);