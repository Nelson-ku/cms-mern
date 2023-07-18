import React,{useState}  from "react";
import Navbar from "./navbar";
import { Button,Card, CardActions, Grid, TextField } from "@mui/material";
// import { CardActions } from "@material-ui/core";

const Login=()=>{
    const [username,setUsername]=useState('');
    const [password, setPassword]=useState('');

    // const handleSubmit=async(e)=>{
    //     e.preventDefault();

    //     try{
    //         //sen login request  and handle the login request
        
    //         const response =await fetch('api/login',{
    //             method:'POST',
    //             headers:{
    //                 'Content-Type':'application/json'
    //             },
    //             body:JSON.stringify({username,password}),
    //         });
        
    //         if(response.ok){
    //             const {role, token}=await response.json();
        
    //         //store the token and roles in srorage cookie
        
    //         localStorage.setItem('token',token);
    //         localStorage.setItem('role',role);
        
        
    //         //redirect the user based on their role 
        
    //         if(role==='admin'){
    //             window.location.href='admin';
    //         }else{
    //            window.location.href='/user';
    //         }
    //             }else{
    //                 console.log('login Failed');
    //             }
        
    //     }catch(error) {
    
    //         console.error('login error',error)
    
    //     }
    // };

    return(
    
        <div>
            <Navbar />
            <br/>
            
            <Card >
            
            <Grid container spacing={2}>
            <form  className="loginform">
            <h1>Login</h1>
                <Grid xs={12}>
                <TextField type='text' placeholder="Username" value={username}
                on onChange={(e)=>setUsername(e.target.value)}/>
                </Grid>
                     <br/>
                     <br/>
                <Grid xs={12} >
                <TextField type='password' placeholder="password" value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
                </Grid>
                <CardActions><Button type='submit' >login</Button></CardActions>
                
            </form> 

            </Grid>

            </Card>

        </div>
    );   
};
    
export default Login;


