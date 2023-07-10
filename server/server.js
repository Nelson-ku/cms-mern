
//perfoming imports
const express =require('express');

const app = express();

const cors =require ('cors')

const mongoose =require('mongoose')

require ('dotenv').config();



app.use(cors());

app.use(express.json());

//configuring the routes
const cutomersRoutes=require('./routes/customers');

app.use((req,res,next)=>{
    console.log(req.path,req.method)
   next()
});

//utilizing routes 

app.use('/api/customers',cutomersRoutes)

//connecting to the mongodb through the URI
mongoose.connect(process.env.mongo_uri)
//listening to the requests once connected  to the db
.then(()=>{
    console.log('db connected successfully...')
    //listening for requests 
})
.catch((error)=>{
    console.log(error)
})

const port=process.env.port || 5000
app.listen(port,()=>{
    console.log(`server active at port ${port}`);
})