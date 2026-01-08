class Person {
    #age;

    set age(value){
        if(value>0){
            this.#age = value;
        }
    }

    get age(){
        return this.#age;
    }
}

const p1 = new Person();
p1.age = 25;
console.log("person 1 "+p1.age);

