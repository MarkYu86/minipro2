import React from "react";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import '../App.css'
import{ useState } from 'react'

function Navbar() {
  const [title,setTitle]= useState('GT GALLERY');

  const hoverTitle = () =>{
    setTitle("GT GALLERY 2.0");
  }
  const defaultTitle = () =>{
    setTitle("GT GALLERY")
  }
  return (
    <AppBar position="fixed" sx={{ top: 0 }} >
      <Toolbar className="navbar">
        <Typography className="title" variant="h6" sx={{ flexGrow: 0 }}
        onMouseEnter={hoverTitle}
        onMouseLeave={defaultTitle}>
        {title}
        </Typography>
        <Box sx={{ml:'auto'}}>
          {" "}
          <Button color="inherit" className="navbtn"component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" className="navbtn"component={Link} to="/gallery">
            Gallery
          </Button>
          <Button color="inherit" className="navbtn"component={Link} to="/contact">
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
