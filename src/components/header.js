import React, {Component} from 'react';
import logo from '../logo.svg';
import search from '../img/search.svg';
import login from '../img/login.svg';
import registration from '../img/registration.svg';

class Header extends Component {
    render() {
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
    constructor(props) {
        super(props);
        this.state = {'searchField': false};
    }

    changeState = () => this.setState({'searchField': !this.state.searchField});


    getClassName = () => 'form-control search-field' + (this.state.searchField ? '' : ' search-field-invisible');


    render() {
        return (
            <div>
                <input type="text" className={this.getClassName()} placeholder='Search' onBlur={this.changeState}/>
                <img src={search} alt="Search" data-toggle="tooltip" title="Search" className="nav-icon"
                     onClick={this.changeState}/>
                <img src={login} alt="Sign In" data-toggle="tooltip" title="Sign In" className="nav-icon"/>
                <img src={registration} alt="Sign Up" data-toggle="tooltip" title="Sign up" className="nav-icon"/>
            </div>
        );
    }
}

export default Header;

