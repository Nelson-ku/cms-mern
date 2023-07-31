import React, { useState } from "react";
import Navbar from "./navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";


import { Button, Card, CardActions, Grid, TextField } from "@mui/material";
// import { CardActions } from "@material-ui/core";

const Login = () => {
  const [firstname, setFirstname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //sen login request  and handle the login request

      const response = await axios.post(
        "http://localhost:8000/api/customers/login",{
            firstname,
            password
        }
      );
 
      if (response.status===200) {

        const {role} = await response.data;
        const {token}=await response.accessToken;

        //store the role in local storage
        localStorage.setItem('role',role);

        localStorage.setItem('token',token);

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
                placeholder="firstname"
                value={firstname}
                on
                onChange={(e) => setFirstname(e.target.value)}
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
