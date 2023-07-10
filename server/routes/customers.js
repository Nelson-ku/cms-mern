const customers= require('../models/customersModels')
const express =require('express')

const{
    createCustomer,
    getCustomer,
    getCustomers,
    deleteCustomer,
    updateCustomer
}=require('../controllers/customerControllers')

//creating an instance of a router

const router=express.Router()

router.get('/allCustomers',getCustomers)

router.get('/getcustomer/:id',getCustomer)

router.post('/createcustomer',createCustomer)

router.delete('/deletecustomer/:id',deleteCustomer)

router.patch('/updateCustomer/:id',updateCustomer)


//exporting the routes for use

module.exports=router
