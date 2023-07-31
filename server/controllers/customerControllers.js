const customerModel=require('../models/customersModels')
const express =require('express');

const mongoose=require('mongoose');

const jwt=require('jsonwebtoken');

const config=require('../jwt-token/jwt-token')

const nodemailer=require('nodemailer')

const bodyParser=require("body-parser");
const jwtToken = require('../jwt-token/jwt-token');


//function to get all customers

const app = express();

app.use(bodyParser.json());

const loginUser=async(req,res)=>{
    const{firstname, password}=req.body
    const user= await customerModel.findOne({firstname,password}).exec();

    
      const payload={user};
    //     user:{
    //          firstname:user.firstname,
    //          lastname:user.lastname,
    //          role:user.role,
    //          email:user.email,
    //         password:user.password,

    //      }
    // };

    const token=jwt.sign(payload, config.jwtSecret,{
       expiresIn:config.jwtExpiration, 
       
    });
    if (user){
        res.status(200).json({status:"Success", data:user, acessToken:token});
    }else {
        //return error msg
        res.status(401).json({message:'credentials invalid'})
    }
    
       
 
    // console.log(token);
    
    // console.log(payload);

};

const getCustomers=async(req,res)=>{
    //getting all clients from the last registered 
    const customers= await customerModel.find({}).sort({createdAt:-1})

    res.status(200).json(customers)
    
    
}

//function to get a single customer

const getCustomer= async (req,res)=>{
    const{id}=req.params
      //checking if the customer with the specified ID is available or invalid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'customer invalid'})

    }

    const customers=await customerModel.findById(id)

    if(!customers){
        return res.status(404).json({error:'customer invalid id'})


    }
    res.status(200).json(customers)
}

//deleting a customer


const deleteCustomer= async(req,res)=>{
    const{id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'customer invalid'})
    }

    const customers=await customerModel.findOneAndDelete({_id:id})

    if(!customers){
        return res.status(404).json({error:'the customer doesnt exist'})
    }
    res.status(200).json(customers)
}


//creating a customer

const createCustomer=async(req,res)=>{
    console.log('creating customer');
    const{firstname,lastname,email,password,role,phonenumber,address}=req.body;

    const sendLoginEmail=async(email,firstname,password)=>{
        const transporter=nodemailer.createTransport(
            {
                service:'Gmail',
                auth:{
                    user:'oginganelson2018@gmail.com',
                    pass:'tfitwuobcvzqkbhf'
                },
            });
    
            const mailOptions={
                from:"oginganelson2018@gmail.com",
                to:email,
                subject:'Welcome to our CRM',
                text:`Hello ${firstname},\n\n your account has been created successfully.\n\nLogin details: \n username:${firstname}\nPassword:${password}\n\n Thank you!`,
    
    
            };
    
            try{
                await transporter.sendMail(mailOptions);
                console.log('email sent successfully');
            }catch(error){
                console.error('error sending email',error);
            }
            
    };

    sendLoginEmail(email,firstname,password); 
    
    try{
        const customers= await customerModel.create({firstname,lastname,email,role,password,phonenumber,address})
        res.status(200).json(customers)

    }
    catch(error){
        res.status(400).json({error:error.message})
    };

    //send user email and details
   
    


}




//update a workout

const updateCustomer=async(req,res)=>{
    const{id}=req.params//requesting the id as the parameter

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'invalid customer'})
    }

    const customers=await customerModel.findByIdAndUpdate({_id:id},{
        ...req.body//get all the attributes in the customerModel
    })
    

    if(!customers){
        return res.status(404).json({error:'invalid csutomer'})

        
    }
    res.status(200).json({mssg:'customer updated'})


}
//exporting the controller functions

module.exports={
    createCustomer,
    getCustomer,
    getCustomers,
    deleteCustomer,
    updateCustomer,
    loginUser
}
