import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Customer Management System
        </Typography>
        <Button color="inherit" >Home</Button>
        <Button color="inherit" >About</Button>
        <Button color="inherit" >Contract</Button>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;