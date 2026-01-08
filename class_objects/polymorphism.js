// polymorphism means same method name, different behavior.

// parent class :
class Payment {
    pay(amount){
        console.log('paying ' + amount);
    }
}

class UPI extends Payment {
    pay(amount){
        console.log('paying ' + amount + ' using UPI');
    }
}

class Card extends Payment {
    pay(amount){
        console.log('paying ' + amount+ ' using card'); 
    }
}

function checkout(paymentMethod){
    paymentMethod.pay(500);
}

checkout(new UPI());
checkout(new Card());

