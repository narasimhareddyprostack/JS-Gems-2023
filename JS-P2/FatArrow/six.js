/* function wish(){
    console.log(this)
}
wish() */ //object context is heavy
let wish = ()=>{
    console.log(this)
}  
wish()