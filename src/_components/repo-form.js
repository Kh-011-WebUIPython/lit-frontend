import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBarRepo from './navbar-repo';
import ListFiles from './list-files';
import BranchDropdown from './branch-dropdown';
import {Button} from 'reactstrap';
import RepositoryTeam from './repo-team';

class RepositoryForm extends Component {


    render() {


        return (

            <div className="container-scroll">
                <NavBarRepo/>
                <div>
                    <RepositoryTeam/>
                    <div className="border-dark">
                        <span className="mr-2">Current branch:</span>
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