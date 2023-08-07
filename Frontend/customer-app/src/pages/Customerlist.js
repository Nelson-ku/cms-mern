import React, { useEffect, useState, useCallback } from "react";
import CustomerForm from "../components/customerForm";
import Navbar from "../components/navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  TextField,
} from "@mui/material";

import { deleteCustomer, getCustomers1 } from "../redux/actions";

const Customerlist = () => {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState("");
  const token = localStorage.getItem("token");

  const reduxCustomer = useSelector((state) => state.customers.customerData);
  const dispatch = useDispatch();

  const getCustomers = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/customers/allCustomers",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setCustomers(response.data);
      dispatch(getCustomers1(response.data.id)); //redux for collecting the available data
    } catch (error) {
      console.error("There was a problem fetching data of the customers", error);
    }
  }, [dispatch, token]);

  useEffect(() => {
    getCustomers();
  }, [getCustomers]);

  useEffect(() => {
    setCustomers(reduxCustomer); // Instead of wrapping in an array, use the object itself
  }, [reduxCustomer]);

  //delete function
  const handleClick = async (id) => {
    try {
      await axios.delete(
        "http://localhost:8000/api/customers/deletecustomer/" + id,
        {
          headers: {
            Authorization: `${token}`,
          },
          method: "DELETE",
        }
      );

      dispatch(deleteCustomer(id)); //redux for deletion
      console.log("Customer deleted successfully");
      getCustomers();
    } catch (error) {
      console.error("There was a problem deleting the customer", error);
    }
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
               
              </TableRow>
            </TableHead>
            <TableBody>
              {customers
                .filter((customer) =>
                  filteredCustomers.toLowerCase() === ""
                    ? true
                    : customer.email.includes(filteredCustomers)
                )
                .map((customer) => (
                  <TableRow key={customer._id}>
                    <TableCell>{customer.firstname}</TableCell>
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
