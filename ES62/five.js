let users={
    name:"rahul",
    email:"rahul@gmailcom",
    loc:'bangalore'
}
let details={
    avail:false,
    email:"rahul@ibm.com",
    sal:45000
}
let user_Details={...users,...details}
console.log(user_Details)