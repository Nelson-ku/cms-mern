import React, { useEffect, useState } from "react";
import CustomerForm from "../customerForm";
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

  //render the data
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
                <Button variant="contained">Update</Button>
              </TableCell>
              <TableCell>
                <Button variant="outlined">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
      <br/>
      <h2>Create a new customer account</h2>
    <CustomerForm/>
    </div>
    </>
  );
};
export default Customerlist;
