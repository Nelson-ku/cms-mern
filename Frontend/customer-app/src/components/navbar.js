import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Customer Management System
        </Typography>
        <Button color="inherit" >Register</Button>
        <Button color="inherit" >Pending Orders</Button>
        <Button color="inherit" >Support</Button>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;