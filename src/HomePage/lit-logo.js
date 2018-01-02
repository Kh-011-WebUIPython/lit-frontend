import React from 'react';
import logo from '../logo.svg';
import {NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';

const LitLogo = (props) => {
    return (
        <NavbarBrand className="logo">
            <Link to='/'><img src={logo} alt="LIT logo"
                              className="logo-image mr-2"/></Link>
            <Link to='/'><h1 className="text-muted text-cursive">LIT</h1>
            </Link>
        </NavbarBrand>
    );
}

export default LitLogo;