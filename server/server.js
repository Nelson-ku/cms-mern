const express =require('express');

const app = express();

const cors =require ('cors')

require ('dotenv').config({path:'./config.env'});

const port =process.env.PORT||5000;

app.use(cors());

app.use(express.json());

app.use(require('./routes/customers'));

app.use((req,res,next)=>{
    console.log(req.path,req.method)
   next()
});


app.listen(port, ()=>{
    //connecting to the database
    dbo.connectToServer(function(err){
        if(err) console.error(err);
    });
    console.log(`server is running on port :${port}`);
});