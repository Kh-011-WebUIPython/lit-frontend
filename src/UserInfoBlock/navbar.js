import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <div className="d-block d-md-none">
        <Navbar color="faded" light>
          <NavbarBrand className="mr-auto">
            <Link to="/">
              <img
                src={ this.props.avatar || 'https://picsum.photos/50/50' }
                width="50"
                height="50"
                alt="Avatar"
                className="br-50 mr-1"
              />
              { this.props.username }
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={ this.toggleNavbar } className="mr-2"/>
          <Collapse isOpen={ !this.state.collapsed } navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/settings/">Settings</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={ this.props.signOut }>Sign Out</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}