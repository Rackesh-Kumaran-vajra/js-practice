// inheritance :
/* One class can use (inherit) the properties and methods of another class */

// parent class:
class Employee {
    constructor(name){
        this.name = name;
    }

    work(){
        console.log(this.name + ' is working');
    }
}


// child class:
class Developer extends Employee {


    code(){
        console.log(this.name + ' is coding');
    }

}

const dev = new Developer('Rackesh');
dev.work();
dev.code();


