
import React from 'react';
import { AppBar, Tabs, Tab, Toolbar, Typography } from '@mui/material';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './Home';
import CryptoCurrencyConverter from './CryptoCurrencyConverter';

const NavBar = () => {
  return (
    <Router>
      <AppBar position="static" >
        <Toolbar style={{justifyContent:"space-between"}}>
          <Typography variant="h6" component="div">
            Crypto App
          </Typography>
          <Tabs>
            <Tab label="Home" to="/" component={Link} />
            <Tab label="Crypto Converter" to="/cryptoconverter" component={Link} />
          </Tabs>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cryptoconverter" element={<CryptoCurrencyConverter />} />
      </Routes>
    </Router>
  );
};

export default NavBar;
