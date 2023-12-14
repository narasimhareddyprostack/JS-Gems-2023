class Account{
    constructor(){
        console.log("Account class constructor")
    }
}
class SA extends Account{
    constructor(){
        super()
        console.log("SA Account Constructor")
    }
}
class CA extends Account{
    constructor(){
        console.log("CA const")
    }
}
new SA()