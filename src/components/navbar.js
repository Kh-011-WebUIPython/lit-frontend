import React, {Component} from 'react';
import logo from '../logo.svg';
import search from '../img/search.svg';
import login from '../img/login.svg';
import registration from '../img/registration.svg';
import {Navbar, NavbarBrand, Modal, ModalBody, ModalHeader} from 'reactstrap';
import SignUpForm from "./sign-up-form";
import SignInForm from "./sign-in-form";

class NavBar extends Component {

    render() {
        let className = `position-${this.props.isFixed ? 'fixed nav-dark' : 'absolute'} w-100vw z-999 nav-tr`;
        return (
            <div className={className}>
                <Navbar className="container">
                    <LitLogo/>
                    <Nav/>
                </Navbar>
            </div>
        );
    }
}

class LitLogo extends Component {
    render() {
        return (
            <NavbarBrand className="logo">
                <img src={logo} alt="LIT logo" className="logo-image mr-2"/>
                <h1 className="text-muted text-cursive">LIT</h1>
            </NavbarBrand>
        )
    }
}

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {'searchField': false};
    }

    // todo: focus on input after it opens

    changeState = () => this.setState({'searchField': !this.state.searchField});


    getClassName = () => 'form-control search-field' + (this.state.searchField ? '' : ' search-field-invisible');


    render() {
        return (
            <div>
                <input type="text" className={this.getClassName()} placeholder='Search' onBlur={this.changeState}/>
                <img src={search} alt="Search" data-toggle="tooltip" title="Search" className="icon nav-icon"
                     onClick={this.changeState}/>
                <ModalSign src={login} alt="Sign In" title="Sign In"/>
                <ModalSign src={registration} alt="Sign Up" title="Sign Up"/>
            </div>
        );
    }
}

class ModalSign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
    }

    toggle = () => this.setState({modal: !this.state.modal});

    render() {
        return (
            <div className="d-inline-block">
                <img src={this.props.src} alt={this.props.alt} data-toggle="tooltip" title={this.props.title}
                     className="icon nav-icon" onClick={this.toggle}/>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
                    <ModalBody>
                        {this.props.title.indexOf('Up') !== -1 ? <SignUpForm/> : <SignInForm/>}
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}


export default NavBar;

