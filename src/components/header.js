import React, {Component} from 'react';
import logo from '../logo.svg';
import search from '../img/search.svg';
import login from '../img/login.svg';
import registration from '../img/registration.svg';

class Header extends Component {
    render () {
        return (
            <div className='container'>
                <div className='flex justify-content-between align-items-center'>
                    <LitLogo/>
                    <Nav/>
                </div>
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

class Nav extends Component {
    render() {
        return (
            <div>
                <img src={search} alt="Search" className="nav-icon"/>
                <img src={login} alt="Login" className="nav-icon"/>
                <img src={registration} alt="Registration" className="nav-icon"/>
            </div>
        )
    }
}

export default Header;

// todo: add reset.css
