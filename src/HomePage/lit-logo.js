import React from 'react';
import logo from '../logo.svg';
import {NavbarBrand} from 'reactstrap';

const LitLogo = (props) => {
    return (
        <NavbarBrand className="logo">
            <img src={logo} alt="LIT logo" className="logo-image mr-2"/>
            <h1 className="text-muted text-cursive">LIT</h1>
        </NavbarBrand>
    );
}

export default LitLogo;