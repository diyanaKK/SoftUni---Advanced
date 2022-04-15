class ChocoFactory {
    constructor(litersMilk) {
        this.litersMilk = litersMilk;

    }

    get currentMilk() {
        return this.litersMilk;
    }

    set currentMilk(value) {
        if (value < 0) {
          throw new Error('please enter valid number') 
        } else {
        this.litersMilk -= value
        console.log('chocko created') 
    }
    }
}

const myFactory = new ChocoFactory(-100);
console.log(myFactory);
// myFactory.currentMilk = -100
// myFactory.currentMilk = 20
// console.log(myFactory.currentMilk);
