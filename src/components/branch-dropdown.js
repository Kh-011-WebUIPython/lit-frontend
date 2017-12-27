import React, {Component} from "react";
import {
    ButtonDropdown, DropdownItem, DropdownMenu,
    DropdownToggle
} from 'reactstrap';
import {Link} from 'react-router-dom';

class BranchDropdown extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen}
                            toggle={this.toggle}>
                <DropdownToggle caret>
                    Master
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem><Link
                        to='/repository'>Developer</Link></DropdownItem>
                    <DropdownItem><Link
                        to='/repository'>Feature/Task_4/Something_do_it</Link></DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        );
    }
}

export default BranchDropdown;