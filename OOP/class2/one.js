class Account{
    acc_Id;
    acc_Name;
    acc_Bal;
    min_Bal=500;
    open_Account(){
        console.log("Acccount Opened Successfully")
    }
    deposit_Amount(){
        console.log("Amount Deposited")
    }
    withdrawl(){
        console.log("InSuffient Bal")
    }
    get_Bal(){
        console.log("Servre Busy")
    }
    close_Amount(){
        console.log("Bal is - ve")
    }
}

let a1=new Account()
console.log(a1)
a1.open_Account()
a1.deposit_Amount()
a1.withdrawl()
a1.get_Bal()
a1.close_Amount()