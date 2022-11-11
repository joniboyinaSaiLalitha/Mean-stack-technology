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


nm.insertMany([
    { name: 'Gopal', age: 28},
    { name: 'Rakesh', age: 45},
    { name: 'Vasu', age: 34}
]).then(function(){
    console.log("Data inserted") 
}).catch(function(error){
    console.log(error)      
});
