let state = {
    users:[],
    product:{
        details:{
            pId:'P101',
            p_Name:'Iphone 18',
            price:18000,
            avail:true
        }
    },
    color:['W','B','R'],
    user:{ name:'Rahul', email:'rahul@gmail.com'},
}
let {product}=state
let {details}=product
let {p_Name}=details
console.log(p_Name)