const express=require("express");
const app=express();
const PORT=3000

app.get("/students/:name",(req,res)=>{
    console.log(req.url)
    console.log(req.method)
    // console.log(req.body)
    console.log(req.params.name)
    res.send("<h1>Hello World</h1>");
})

app.get("/students",(req,res)=>{
    console.log(req.url)
    console.log(req.query.cgpa)
    res.send("Hello from students")
})

app.listen(PORT,()=>console.log("server is running"));