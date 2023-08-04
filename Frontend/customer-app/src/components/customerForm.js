import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { createCustomer } from "../redux/actions";
import { useDispatch } from 'react-redux';

const CustomerForm = () => {
  //this for creating the fields for the attributes to be filled in
 

  const dispatch= useDispatch();


  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const[password, setPassword]=useState("");
  const[role,setRole]=useState("");
  const [error, setError] = useState("");
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(firstname, lastname, email, phonenumber, address);

    const data = {
      firstname: "Alvin1",
      lastname: "Camil2",
      email: "Alvin@2221gmail.com",
      phonenumber: "07456043700",
      password:"hsrutryi2",
      role:'customer',
      address: "Mombasa1",
    };

    const token =localStorage.getItem("token");
 


    const response = await axios
      .post("http://localhost:8000/api/customers/createcustomer",{
        headers:{
          Authorization: `${token}`,
        },
        firstname,
        lastname,
        email,
        role,
        password,
        phonenumber,
        address,
      })
      .then((data) => {
        console.log("Data added successfully");
        setFirstName("");
        setLastName("");
        setEmail("");
        setAddress("");
        setRole("");
        setPhonenumber("");
        setPassword("")
        setError(null);
      });
     const customerData= response.data;
     dispatch(createCustomer(customerData))//store login state
    // console.log("workout added", json); //check the addition
  };

  return 85(
    //creating the form
    <form onSubmit={handleSubmit}>
      <h2>Create a new customer account</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="LastName"
            variant="outlined"
            fullWidth
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Role"
            variant="outlined"
            fullWidth
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Set password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone"
            variant="outlined"
            fullWidth
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address"
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Create Customer
          </Button>
        </Grid>
        
      </Grid>
    </form>
    
  );
  
};

export default CustomerForm;
