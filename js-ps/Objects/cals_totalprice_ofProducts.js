// Calculate total price of products stored in an object.

let cart = {
    laptop : 50000,
    mouse: 500,
    keyboard:1500
};

let total = 0;

for(let item in cart){
    total = total + cart[item];
}

console.log('total price : '+ total);