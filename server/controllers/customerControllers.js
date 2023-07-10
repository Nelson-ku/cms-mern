const customerModel=require('../models/customersModels')

const mongoose=require('mongoose')

//function to get all customers

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
    console.log('creating customer')
    const{firstname,lastname,email,phonenumber,address}=req.body
    
    try{
        const customers= await customerModel.create({firstname,lastname,email,phonenumber,address})
        res.status(200).json(customers)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
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
    updateCustomer
}
