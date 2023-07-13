import React, { useState } from "react";

import { TextField, Button, Box } from "@mui/material";

const Search = ({ onSearch }) => {
  const [searchItem, setSearchItem] = useState("");

  const handleInputChange = (event) => {
    setSearchItem(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchItem);
  };

  return (
    <form className="search" onSubmit={handleSearch}>
      <Box display="flex" alighnItems="center">
        <TextField
          label="Search"
          variant="outlined"
          value={searchItem}
          onChange={handleInputChange}
        />
        <Button variant="contained" type="submit" sx="{{ml:2}}">
          search
        </Button>
      </Box>
    </form>
  );
};

export default Search;
