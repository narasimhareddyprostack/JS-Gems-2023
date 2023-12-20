let employees=[
    {id:101,name:"rahul",sal:45000},
    {id:102,name:"Sonia",sal:55000}
]
let create_Employees=(emp,callback)=>{
    setTimeout(()=>{
        employees.push(emp)
        callback()
    },4000)
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

create_Employees({id:103,name:"Priyanka",sal:65000},displaly_Employees)
