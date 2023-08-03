const express =require('express')

const verifyToken=require('../jwt-token/jwtmiddleware')

const{
    createCustomer,
    getCustomer,
    getCustomers,
    deleteCustomer,
    updateCustomer,
    loginUser
}=require('../controllers/customerControllers')

//creating an instance of a router

const router=express.Router()

router.post('/login', loginUser)

router.get('/allCustomers',verifyToken, getCustomers)

router.get('/getcustomer/:id',verifyToken,getCustomer)

router.post('/createcustomer',verifyToken,createCustomer)

router.delete('/deletecustomer/:id',verifyToken,deleteCustomer)

router.patch('/updatecustomer/:id',verifyToken,updateCustomer)


//exporting the routes for use

module.exports=router
