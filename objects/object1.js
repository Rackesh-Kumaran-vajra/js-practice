// object creation in normal way:
let person = {
    firstName: "Logesh",
    lastName: "jayagopi",
    age: 27,
    isStudent : true
}


// object creation using Object class:
/*
let newPerson = Object.create({
    firstName : 'john'
})
*/

//accessing the object property :

/*
console.log(person.firstName);
console.log(person['firstName']);
console.log(person['lastName']);
console.log(person['address']);

*/

// how to change the property value in the object:

/*
console.log(person);
person.firstName = 'john';
person.lastName = 'doe';
console.log(person);
*/

// how to delete the property value from the object:
/*
delete person.isStudent;

console.log(person);
*/

// how to find the property in the object :

console.log('firstName' in person);
console.log('fullName' in person);
