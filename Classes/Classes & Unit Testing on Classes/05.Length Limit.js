class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString,
            this.innerLength = innerLength
    }
    increase(length) {
        this.innerLength += Number(length)
    }

    decrease(length) {
        this.innerLength -= Number(length)
        if (this.innerLength < 0) {
            this.innerLength = 0
        }
    }
    toString(){
        if(this.innerString.length > this.innerLength){
            if(this.innerLength === 0){
                return '...'  
            }else{
                let diff= this.innerString.length - this.innerLength
                let newString = this.innerString.substring(0,diff)
                newString +='...'
                return newString
            }
        }else{
            return this.innerString
        }
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test