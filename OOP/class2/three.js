class Account{
    acc_Id;
    acc_Name;
    acc_Bal;
    min_Bal=500;
    deposit_Amount(amount){
        console.log("Amount Deposited")
    }
}

let a1=new Account()
a1.deposit_Amount(5000)
