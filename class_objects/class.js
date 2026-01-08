class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log('hello, my name is '+ this.name);
    }
}

const person1 = new Person('rackesh',23);

console.log(person1.name);
console.log(person1.age);

