class Account{
    acc_Name;
    acc_Email;
    constructor(name,email){
        this.acc_Name =name 
        this.acc_Email =email
    }
}
class SA extends Account{
    constructor(id,name,email){
            super(name,email)
    }
}
let sa=new SA(101,'Rahul','rahul@gmail.com')
console.log(sa)