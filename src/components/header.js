import React, {Component} from 'react';
import logo from '../logo.svg';

class Header extends Component {
    render () {
        return (
            <div>
                <LitLogo/>
            </div>
        );
    }
}

class LitLogo extends Component {
    render() {
        return (
            <div className="logo">
                <img src={logo} alt="LIT logo" className="logo-image"/>
                <h1 className="text-muted">LIT</h1>
            </div>
        )
    }
}

export default Header;

// todo: add reset.css
