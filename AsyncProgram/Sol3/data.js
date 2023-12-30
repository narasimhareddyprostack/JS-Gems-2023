let employees=[
    {id:101,name:"rahul",sal:45000},
    {id:102,name:"Sonia",sal:55000}
]
let create_Employee=(emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let flag = true;

            if(flag){
                    employees.push(emp)
                    resolve("Data Inserted!")
            }
            else{
                reject("Data Failed")
            }
        },4000)
    })
}

let displaly_Employees=()=>{
    setTimeout(()=>{
        let rows=""

        for(emp of  employees){
            rows  = rows + `<tr>
                                <td>${emp.id}</td>
                                <td>${emp.name}</td>
                                <td>${emp.sal}</td>
                            </tr>`
        }
        document.getElementById('tbody_Data').innerHTML = rows
    
    },1000)
}

let execute = async ()=>{
    await create_Employee({id:103, name:"Priyanka", sal:75000})
    displaly_Employees()

}
execute()
