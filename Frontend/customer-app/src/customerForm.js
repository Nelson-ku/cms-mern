import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const CustomerForm = () => {
  //this for creating the fields for the attributes to be filled in

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(firstname, lastname, email, phonenumber, address);

    
    const data = {
      firstname: "Alvin1",
      lastname: "Camil2",
      email: "Alvin@2221gmail.com",
      phonenumber: "07456043700",
      address: "Mombasa1",
    };

    const response = await axios
      .post("http://localhost:8000/api/customers/createcustomer", {
        headers: { "Content-Type": "aplication/json" },
        firstname,
        lastname,
        email,
        phonenumber,
        address,
      }).then((data) => {
        console.log("Data added successfully");
        setFirstName("");
        setLastName("");
        setEmail("");
        setAddress("");
        setPhonenumber("");
        setError(null);
      });
      
    // console.log("workout added", json); //check the addition
  };

  return (
    //creating the form
    <form onSubmit={handleSubmit}>
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
            Create Customer
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CustomerForm;
