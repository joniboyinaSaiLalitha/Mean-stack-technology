const express=require('express');
const app=express();
const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017//sai",(err)=>{
if(err)
console.log("DB Not Connected-Error");
else
console.log("DB Connected");});