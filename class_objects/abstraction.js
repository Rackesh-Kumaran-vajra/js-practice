// Abstraction means - show only what the user needs hide how its works inside.

class Phone{
    call(number){
        this.#connectNetwork();
        console.log('calling '+ number);
    }

    pickUp(number){
        this.#connectNetwork();
        console.log('call is picked up '+number);

    }

    #connectNetwork(){
        console.log('connecting to network');
    }
}

class Camera{
    click(image){
        this.#takingshots();
        console.log('image' + image);
    }

    #takingshots(){
        console.log('taking the camera ')
    }
}

const phone = new Phone();
phone.call('9876543210');

const pickup = new Phone();
pickup.pickUp('answered');



const camera = new  Camera();
camera.click(' is captured');

