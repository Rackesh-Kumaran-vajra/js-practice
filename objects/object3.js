class Character {
    constructor(name){
        this.name = name;
    }


    attack(){
        console.log(`${this.name}: swings!`);
    }
}

class Fighter extends Character {
    constructor(name){
        super(name)
    }
}

const fighter = new Fighter('Hulk')
fighter.attack()

