const express=require('express');
const connection=require('./connection')
const app=express();
connection();

app.listen(3000,(err)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log("server is running on port 3000.....")
    }
})