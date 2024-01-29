const express=require('express')
const app=express();

const Port=process.env.PORT||6060;
app.get("/",(req,res)=>{
    res.send("Hello")
})
app.listen()