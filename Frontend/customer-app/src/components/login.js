import React, { useState } from "react";
import Navbar from "./navbar";
import axios from "axios";

import { useNavigate } from "react-router-dom";


import { Button, Card, CardActions, Grid, TextField } from "@mui/material";

// import { CardActions } from "@material-ui/core";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //sen login request  and handle the login request

      const res = await axios.post(
        "http://localhost:8000/api/customers/login",{
            email,
            password,
            
        }
      );
 
      if (res.status===200) {


        // console.log(res.acessToken , 'wertyuiytui');
        const token=res.data.acessToken;

    

        const role=res.data.data.role;
        console.log('token',res.data.acessToken);

        //store the token in local storage
 

        localStorage.setItem('token',token);
        localStorage.setItem('role',role);

        
       
        console.log(token);

        //redirect the user based on their role

        if (role === "admin") {
           navigate("/customerlist");
        } else if(role==="customer") {
          navigate("/customer");
        }
      } else {
        console.log("login Failed");
      }
    } catch (error) {
      console.log("login error", error);
    }
  };

  return (
    <div>
      <Navbar />
      <br />
     

      <Card>
        <Grid container spacing={2}>
          <form onSubmit={handleSubmit} className="loginform">
            <h1>Login</h1>
            <Grid xs={12}>
              <TextField
                type="text"
                placeholder="Email"
                value={email}
                on
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <br />
            <br />
            <Grid xs={12}>
              <TextField
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <CardActions>
              <Button type="submit">login</Button>
            </CardActions>
          </form>
        </Grid>
      </Card>
    </div>
  );
};
export default Login;
