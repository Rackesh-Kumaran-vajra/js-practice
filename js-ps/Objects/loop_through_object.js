// Print all keys and values of an object.

let student = {
    name : 'ravi',
    age : 21,
    course : 'javascript'
}

for(let key in student){
    console.log(key + ':' , student[key]);
}