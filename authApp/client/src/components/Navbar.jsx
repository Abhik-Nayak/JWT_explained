import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        MERN App
      </Typography>
      <Button color="inherit" href="/login">Login</Button>
      <Button color="inherit" href="/register">Register</Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
