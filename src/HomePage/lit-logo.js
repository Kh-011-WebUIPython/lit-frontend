import React from 'react';
import { NavbarBrand } from 'reactstrap';
import logo from '../logo.svg';

const LitLogo = () => (
  <NavbarBrand className="logo">
    <img src={logo} alt="LIT logo" className="logo-image mr-2" />
    <h1 className="text-muted text-cursive">LIT</h1>
  </NavbarBrand>
);

export default LitLogo;
