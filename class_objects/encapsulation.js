/*
Encapsulation means wrapping data and methods together and restricting direct access.

Real-life example:
Bank account :

- you cannot directly change balance
- you use deposit() / withdraw()

*/



class BankAccount {
    #balance = 0; // private property

    deposit(amount){
        this.#balance += amount; // initial bal = 0 , deposit 1000 => bal (0) + amt(1000) = 1000;
    }

    withdraw(amount){
        if(amount <= this.#balance){
            this.#balance -= amount; // 1000 - 500 = 500;
        }
        else{
            console.log("insufficient Balance");
        }
    }


    getBalance(){
        return this.#balance;
    }
}

const acc = new BankAccount();
acc.deposit(1000);  
acc.withdraw(500);
console.log(acc.getBalance()); 



// protected :

class Employee {
    _salary = 30000; // protected (by convention)
}

class Manager extends Employee {
    showSalary(){
        console.log(this._salary); //allowed
    }
}

const m = new Manager();
m.showSalary();



