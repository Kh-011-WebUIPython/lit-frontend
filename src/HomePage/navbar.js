import React, {Component} from 'react';
import LitLogo from './lit-logo';
import {Navbar} from 'reactstrap';
import NavLinks from './nav-links';

class NavBar extends Component {

    render() {
        let className = `position-${this.props.isFixed ? 'fixed nav-dark' :
            'absolute'} w-100vw z-999 nav-tr`;
        return (
            <div className={className}>
                <Navbar className="container">
                    <LitLogo/>
                    <NavLinks/>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;