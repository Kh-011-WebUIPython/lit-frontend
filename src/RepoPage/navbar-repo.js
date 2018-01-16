import React, {Component} from 'react';
import {Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink} from 'reactstrap';

class NavBarRepo extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="faded" light expand="md">
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/branches">Branches</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/commits">Commits</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/open_pull_request">Pull request</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/repository_settings">Settings</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBarRepo;