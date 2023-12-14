class Parent{
    constructor(amount){
        console.log(amount)
    }
}
class Child extends Parent {
    constructor(){
        super(100)
    }
}
new Child()