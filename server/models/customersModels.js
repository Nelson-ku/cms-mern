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
        required:true
    },
    phonumber:{
        type:Number,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    joindate:{
        type:Date,
        required:true
    } 
    
    
},{timestamps:true})// provide time when the entry was created


module.exports =mongoose.model('Customers',customerSchema)


