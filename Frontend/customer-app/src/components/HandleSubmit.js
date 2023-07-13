import { Button, Grid,TextField } from "@mui/material";
import axios from 'axios';
import {useState } from 'react';


const HandleSubmit = async (customer) => {
    const [firstname, setFirstName] = useState(customer.firstname);
    const [lastname, setLastName] = useState(customer.lastname);
    const [phonenumber, setPhonenumber] = useState(customer.phonenumber);
    const [email, setEmail] = useState(customer.email);
    const [address, setAddress] = useState(customer.address);


    // e.preventDefault();
    console.log(firstname, lastname, email, address);
  
    const data = {
      firstname: "alvin",
      lastname: "camil",
      email: "camil@gmail.com",
      phonenumber: "0743778348",
      address: "marsabit",
    };
  
    const response = await axios
      .patch("http://localhost:8000/api/customers/updatecustomer" + customer._id, {
        headers: { "Content-Type": "application/json" },
        firstname,
        lastname,
        email,
        phonenumber,
        address,
      })
      .then((data) => {
        console.log("customer updated successfully");
        setFirstName("");
        setLastName("");
        setEmail("");
        setAddress("");
        setPhonenumber("");
      });
  
    return (
      <form onSubmit={HandleSubmit}>
        <h3>updating customer</h3>
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
              Update-customer
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  };


export default HandleSubmit;