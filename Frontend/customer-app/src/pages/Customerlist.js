import React, { useEffect, useState } from "react";
import CustomerForm from "../components/customerForm";
import Navbar from "../components/navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  TextField,
} from "@mui/material";

//create a state variable for the search;

const Customerlist = () => {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState("");
  const token = localStorage.getItem("token");



  const getCustomers = async () => {
    await axios
      .get("http://localhost:8000/api/customers/allCustomers", {
        headers:{
          Authorization: `${token}`,
        },
      })
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
        headers:{
          Authorization: `${token}`,
        },
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
    <div className="Customer-details">
      <Navbar />
      <br />
      <TextField
        type="text"
        placeholder="Search"
        className="search"
        onChange={(e) => setFilteredCustomers(e.target.value)}
      />

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
              {customers
                .filter((customer) => {
                  return filteredCustomers.toLowerCase === ""
                    ? customer
                    : customer.email.includes(filteredCustomers);
                })
                .map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>{customer.firstname}</TableCell>
                    <TableCell>{customer.lastname}</TableCell>
                    <TableCell>{customer.phonenumber}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.address}</TableCell>
                    <TableCell>
                      {console.log("{customer.id", customer._id)}

                      <Link variant="contained" to={`/update/${customer._id}`}>
                        Edit
                      </Link>
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
      <div />
    </div>
  );
};

export default Customerlist;

//create a function to handle onclick where the function gets the id and link parsing it to the next function handle submit
// which will perform a get requests for that specific user and then using that perfom an update request.
