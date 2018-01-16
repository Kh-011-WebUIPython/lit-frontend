import React from 'react';
import { Navbar } from 'reactstrap';
import LitLogo from './lit-logo';
import NavLinks from './nav-links';

const NavBar = () => {
  const className = `position-${this.props.isFixed ? 'fixed nav-dark' : 'absolute'} w-100vw z-999 nav-tr`;
  return (
    <div className={className}>
      <Navbar className="container">
        <LitLogo />
        <NavLinks />
      </Navbar>
    </div>
  );
};

export default NavBar;
