import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBarRepo from "./navbar-repo";
import ListFiles from "./list-files";
import BranchDropdown from './branch-dropdown';
import {Button} from 'reactstrap';

class RepositoryForm extends Component {


    render() {


        return (

            <div>
                <NavBarRepo/>
                <div>
                <Link to='/repository'><h2 className="py-4">RepoName</h2></Link>
                <div className="border-dark">
                    <span>Current branch:</span>
                    <BranchDropdown/>
                    <Link to='/repository'><Button className="ml-5"
                                                   color="primary">Pull
                        request</Button></Link>
                    <ListFiles/>
                </div>
                </div>
            </div>
        );
    }
}


export default RepositoryForm;