let cars=[{brand:"maruthi", model:'swift',price:'800000',color:"white"},
        {brand:"tata", model:'nexon',price:'1800000',color:"pink"},
        {brand:"maruthi", model:'alto',price:'300000',color:"black"},
        {brand:"tata", model:'harrier',price:'2800000',color:"white"},
        {brand:"mahindra", model:'xuv300',price:'900000',color:"white"},
        {brand:"RR", model:'EVOQUE',price:'5800000',color:"red"},
        {brand:"Toyota", model:'Fortuner',price:'5400000',color:"white"},
        {brand:"maruthi", model:'brezza',price:'1400000',color:"white"},
        {brand:"tata", model:'tiago',price:'600000',color:"yellow"},
        {brand:"maruthi", model:'grand vitara',price:'1500000',color:"white"},
        {brand:"ford", model:'eco',price:'1100000',color:"white"}]
//print all whte color cars
let new_Cars=[]
for(car of cars){
    if(car.color !="white"){
       // console.log(car)
       new_Cars.push(car)
    }
}
console.log(new_Cars)