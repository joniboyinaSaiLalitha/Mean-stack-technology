const express=require('express');
const app=express();
const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/CSE_C",(err)=>{
if(err)
console.log("DB Not Connected-Error");
else
console.log("DB Connected");});
const ns=new mongoose.Schema({
name:String,
age:Number,
phno:Number
});
const nm=new mongoose.model("records",ns);
const old={name:"sai"};
const new1={age:28};
let doc=nm.find(old,new1,(err)=>{
if(err){
   console.log(err);
}
else
{
console.log(" find");
}  
});