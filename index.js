const express = require('express');
const app = express();
app.use(express.json());

//Function for next parameter
var name_validate=(request,response, next)=>{
    var data=request.body;
    if(data.Name==undefined){
        response.status(400);
        response.send("No name is provided");
    }
    next();
};

app.listen(8080,()=>{
    console.log("HTTP SERVER IS RUNNING");
});

const Employee=[{"Name":"Venky","Age":21,"Email_id":"venky@gmail.com"},
{"Name":"mani","Age":19,"Email_id":"mani@gmail.com"},
{"Name":"ram","Age":23,"Email_id":"ram233@gmail.com"}
];

//GET CALL
app.get("/fetch/obj",(request,response)=>{
    response.send(Employee);
    });

//POST CALL
app.post("/add/obj/",name_validate,(request,response)=>{
    const new_employee={
        "Name":request.body.Name,
        "Age":request.body.Age,
        "Email_id":request.body.Email_id
    }
    console.log(request.body);
    Employee.push(new_employee);
    response.send("Employee created");
    });

app.put("/put/obj/",(request,response)=>{
    for(let emp of Employee){
        if(emp.Name==request.body.Name){
            emp.Name="surya"
        }
    }
    response.send(Employee);
})

app.delete("/delete/obj/",(request,response)=>{
    for(let emp in Employee){
        if(Employee[emp].Name=="surya"){
            delete Employee[emp];
        }
    }
    response.send(Employee);
})

app.get("/find/obj/",(request,response)=>{
    for(let emp in Employee){
        if(Employee[emp].Name=="Venky"){
            response.send(Employee[emp]);
        }
    }
})


