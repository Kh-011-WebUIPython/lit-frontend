import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBarRepo from "./navbar-repo";
import ListFiles from "./list-files";
import {
    Button, ButtonDropdown, DropdownItem, DropdownMenu,
    DropdownToggle
} from 'reactstrap';


class RepositoryForm extends Component {


    render() {


        return (

            <div>
                <NavBarRepo/>
                <Link to='/repository'><h2 className="py-4">RepoName</h2></Link>
                <div className="border-dark">
                    <BranchDropdown/>
                    <Link to='/repository'><Button className="ml-5"
                                                   color="primary">Pull
                        request</Button></Link>
                    <ListFiles/>
                </div>
            </div>
        );
    }
}


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


export default RepositoryForm;