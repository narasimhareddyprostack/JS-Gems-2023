class Account{
    acc_Id;
    acc_Name;
    acc_Bal=0
    min_Bal=500
    open_Account(){
        console.log("Accounted Successfully")
    }
    deposit_Amount(amount){
        this.acc_Bal= this.acc_Bal + amount
        console.log(amount,":::Amount deposited")
    }
    withdrawl(){
        console.log("withdrawl")
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal
    }
}


let a1=new Account()
let a2=new Account()
console.log(a1)
console.log(a2)
a1.open_Account()
a1.deposit_Amount(6000)
console.log(a1)
console.log(a2)

console.log(a1.get_Bal())
console.log(a2.get_Bal())