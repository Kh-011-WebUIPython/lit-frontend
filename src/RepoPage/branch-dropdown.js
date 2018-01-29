import React, { Component } from 'react';
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Link } from 'react-router-dom';

class BranchDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <ButtonDropdown isOpen={this.state.isOpen} toggle={this.toggle}>
        <DropdownToggle caret> Master </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <Link to="#">dev</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="#">feature/khwup-188/change_architecture</Link>
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default BranchDropdown;
