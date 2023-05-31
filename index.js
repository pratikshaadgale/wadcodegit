const dbConnect=require("./mongodb")
const express=require("express");
const app =express();


//get API

app.get("/",async(req,res)=>{
let result=await dbConnect();
result=await result.find().toArray();
res.send(result);
})

//post API
app.post("/",async(req,res)=>{
    let result=await dbConnect();
    result=result.insertOne(req.body);
    res.send("Data Inserted Successfully")
})
app.listen(3000);