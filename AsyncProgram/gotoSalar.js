let goToSalar = (success,failure)=>{
    let amount = 1500;
   amount>=650 ? success("Go to Movie! Enjoy")  
              : failure("Go to PG! Practice JS") 
}
goToSalar((msg)=>{
    console.log(msg)
},(err)=>{
    console.log(err)
})