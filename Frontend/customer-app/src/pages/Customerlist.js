import React, { useEffect, useState } from "react";
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
    <div>
      <h1>Customers Details</h1>
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
              <strong>update</strong>
            </TableCell>
            <TableCell>
              <strong>delete</strong>
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
      <h3>
        <Button variant="contained" disableElevation>
          Create-Customer
        </Button>
      </h3>
    </div>
  );
};
export default Customerlist;
