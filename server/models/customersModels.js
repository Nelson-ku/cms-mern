const mongoose =require('mongoose')


//creating a schema

const Schema=mongoose.Schema



const customerSchema= new Schema({

    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        required:true,
        unique:true 
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    } 
    
    
},{timestamps:true})// provide time when the entry was created


module.exports =mongoose.model('customers',customerSchema)


