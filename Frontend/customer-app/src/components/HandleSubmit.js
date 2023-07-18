import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import { useParams } from "react-router-dom";


const UpdateCustomer = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState({
    firstname: '',
    lastname: '',
    phonenumber: '',
    email: '',
    address: ''
  });

  useEffect(() => {
    const getCustomer = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/customers/getcustomer/${id}`);
        const customerData = response.data;
        setCustomer(customerData);
      } catch (error) {
        console.log(error);
      }
    };

    getCustomer();
  }, [id]);

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(`http://localhost:8000/api/customers/updatecustomer/${id}`, customer);
      console.log('Customer updated successfully');
      setCustomer({
        firstname: '',
        lastname: '',
        phonenumber: '',
        email: '',
        address: ''
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Customer-details">
      <Navbar />
      <br />
      <form onSubmit={handleSubmit}>
        <h3>Updating customer</h3>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              name="firstname"
              value={customer.firstname}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              name="lastname"
              value={customer.lastname}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              value={customer.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone"
              variant="outlined"
              fullWidth
              name="phonenumber"
              value={customer.phonenumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              name="address"
              value={customer.address}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Update Customer
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default UpdateCustomer;


















































































// const HandleSubmit = () => {
//   const [firstname, setFirstName] = useState("");
//   const [lastname, setLastName] = useState("");
//   const [phonenumber, setPhonenumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");
 
//   const HandleUpdate = async () => {
//     const { id } = useParams();
//     useEffect(() => {
//     const getCustomer =async() =>{
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

//       const updateResponse =  axios
//       .patch(
//         "http://localhost:8000/api/customers/updatecustomer" +id,
//         {
//           headers: { "Content-Type": "application/json" },
//           firstname,
//           lastname,
//           email,
//           phonenumber,
//           address,
//         }
//       )
//       .then((updateResponse) => {
//         console.log("customer updated successfully");
//         setFirstName("");
//         setLastName("");
//         setEmail("");
//         setAddress("");
//         setPhonenumber("");
//       });

//     };

//     // return getCustomer=(response)=>{
//     //   console.log(response);
//     // };


     
//   },


  
//   []);



//     return (
//       <div>
//         <Navbar/>
//         <br/>
//         <form onSubmit={HandleUpdate}>
//           <h3>updating customer</h3>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="First Name"
//                 variant="outlined"
//                 fullWidth
//                 value={firstname}
//                 onChange={(e) => setFirstName(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="LastName"
//                 variant="outlined"
//                 fullWidth
//                 value={lastname}
//                 onChange={(e) => setLastName(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="Email"
//                 variant="outlined"
//                 fullWidth
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="Phone"
//                 variant="outlined"
//                 fullWidth
//                 value={phonenumber}
//                 onChange={(e) => setPhonenumber(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="Address"
//                 variant="outlined"
//                 fullWidth
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button type="submit" variant="contained" color="primary">
//                 Update-customer
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//     );
//   };
// };

// export default HandleSubmit;

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
//

