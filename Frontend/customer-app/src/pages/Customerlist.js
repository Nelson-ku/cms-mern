import React, { useEffect, useState } from "react";
import CustomerForm from "../components/customerForm";
import HandleSubmit from "../components/HandleSubmit";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";

const Customerlist = () => {
  const [customers, setCustomers] = useState([]);

  const getCustomers = async () => {
    await axios
      .get("http://localhost:8000/api/customers/allCustomers")
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        console.error(
          "there was a problem fetching data of the customers",
          error
        );
      });
  };

  //fetching data from the backend server

  useEffect(() => {
    getCustomers();
  }, []);

  //delete function
  const handleClick = async (id) => {
    await axios
      .delete("http://localhost:8000/api/customers/deletecustomer/" + id, {
        method: "DELETE",
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("customer deleted succesffully");
        } else {
          console.log("deletion omitted");
        }
        getCustomers();
      });
  };

  //rendering
  return (
    <>
      <h2>Customers Details</h2>
      <div className="home">
        <div className="table">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>FirstName</strong>
                </TableCell>
                <TableCell>
                  <strong>LastName</strong>
                </TableCell>
                <TableCell>
                  <strong>Phone</strong>
                </TableCell>
                <TableCell>
                  <strong>Email</strong>
                </TableCell>
                <TableCell>
                  <strong>Address</strong>
                </TableCell>
                <TableCell>
                  <strong>Update</strong>
                </TableCell>
                <TableCell>
                  <strong>Delete</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>{customer.firstname}</TableCell>
                  <TableCell>{customer.lastname}</TableCell>
                  <TableCell>{customer.phonenumber}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.address}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      onClick={() => HandleSubmit(customer)}
                    >
                      
                      Update
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      onClick={() => handleClick(customer._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <CustomerForm />    
      </div>
    </>
  );
};




export default Customerlist ;

//create a function to handle onclick where the function gets the id and link parsing it to the next function handle submit
// which will perform a get requests for that specific user and then using that perfom an update request.