import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { useParams } from "react-router-dom";

const HandleSubmit = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
 
// const HandleUpdate = async () => {
//     const { id } = useParams();
//     useEffect(() => {
//     const getCustomer=async() =>{
//      const response = axios.get("http://localhost:8000/api/customers/getcustomer" + id)
//       .then((response) => {
//         const customer = response.data;
//         console.log(customer);
//         setFirstName(customer.firstname);
//         setLastName(customer.lastname);
//         setPhonenumber(customer.phonenumber);
//         setEmail(customer.email);
//         setAddress(customer.address);
//       })
//       // const json= response.json()
//       .catch((err) => console.log(err));
//     };
     
//   },[]);

    return (
      <div>
        <Navbar/>
        <br/>
        <form >
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
      </div>
    );
  };

export default HandleSubmit;

// const HandleSubmit = async () => {
//   const {id} = useParams();
//   console.log("id", id)
//   const [firstname, setFirstName] = useState("");
//   const [lastname, setLastName] = useState("");
//   const [phonenumber, setPhonenumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");

//   // e.preventDefault();
//   console.log(firstname, lastname, email, address);

//   // const data = {
//   //   firstname: "alvin",
//   //   lastname: "camil",
//   //   email: "camil@gmail.com",
//   //   phonenumber: "0743778348",
//   //   address: "marsabit",
//   // };

//   // const response = await axios
//   //   .patch(
//   //     "http://localhost:8000/api/customers/updatecustomer" +id,
//   //     {
//   //       headers: { "Content-Type": "application/json" },
//   //       firstname,
//   //       lastname,
//   //       email,
//   //       phonenumber,
//   //       address,
//   //     }
//   //   )
//   //   .then((data) => {
//   //     console.log("customer updated successfully");
//   //     setFirstName("");
//   //     setLastName("");
//   //     setEmail("");
//   //     setAddress("");
//   //     setPhonenumber("");
//   //   });

//   return (
//
//   );
// };
