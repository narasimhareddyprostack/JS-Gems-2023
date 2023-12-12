class Account{
    acc_Bal=0
    deposit_Amount(amount){
        this.acc_Bal = this.acc_Bal + amount
    }
    get_Bal(){
        return this.acc_Bal
    }
}
let a1=new Account()
let a2=new Account()
let a3=new Account()

console.log(a1)
console.log(a2)
console.log(a3)

a1.deposit_Amount(5000)
a1.deposit_Amount(10)

a2.deposit_Amount(15000)
a3.deposit_Amount(100)
console.log(a1)
console.log(a2)
console.log(a3)

console.log(a1.get_Bal())
console.log(a2.get_Bal())
console.log(a3.get_Bal())