// initialize an object :

// To get all the value from the property you can use this value method:
// Object values() Method: it works likes object is like key value pair in this we gets the value .


/*
const session = {
    id:1,
    time:`26-july-2018`,
    device: 'mobile',
    browser: 'chrome'
};


const values = Object.values(session);
console.log(values);
*/


// Object keys() method:

/*
const employess ={
    boss: 'michael',
    secretary: 'pam',
    sales:'jim',
    accountant:'oscar'
};

const keys = Object.keys(employess);
console.log(keys);

*/


// object.entries() method:

// to make the object result to the array o/p :
/*
const obj = {name:'ADAM',age:20,location:'nepal'};
console.log(Object.entries(obj));
*/



// object freeze() method:
// by this method we can able to make the code that is not to change the property and delete property unnecessary :

/*
let person = {
    names:'john',
    age:25
};

console.log(Object.freeze(person));
person.age=30;
console.log(person.age);

*/


// object seal() method: in this method you can able to change the value but you cannot delete or changes the value .

/*
let person = {name:'john',age:25};
 Object.seal(person);
console.log(person.age = 30);
console.log(delete person.age);
*/


// this keyword:

/*
function createCharacter(name){
    return {
        name,
        greet: function(){
            console.log(`${this.name} says hello!`)
        },
    }
}

const character = createCharacter('logesh');
character.greet();

*/


// new keyword  : 

/*
function Character(name){
    this.name = name;
}

const character = new Character('logesh'); 
console.log(character);

*/

/* prototypes: in js the prototypes is property that is connnected with another object 
for example : we have two object1 and object 2 , so when you want to access the object1 name but it is not in that object .
we can able to see the connected object prototype so in the object2 have as the name property in the object 2 it will share the data to the object1. 
*/

// now we see how to make the prototype connectivity to two objects. by using the proto keyword we can make able to connect the connectivity.

/*
const character = {
    attack: function(){
        console.log('swing!');
    }
}



const fighter = {
    name:'Hulk',
    __proto__:character,
}

console.log(fighter.attack() ) //swing!
*/

// now we can able to use this prototype in without implements the keywords:
/*
function Character(name){
    this.name = name
    this.attack = function (){
        console.log(`${this.name} swings!`);
    }
}

function Fighter(name) {
    this.name = name;
}

// Create a reference for the protoype:
Fighter.prototype = new Character();

const fighter = new Fighter('Hulk')
fighter.attack() //Hulk swings!

*/