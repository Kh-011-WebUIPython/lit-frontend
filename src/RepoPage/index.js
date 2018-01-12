import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBarRepo from './navbar-repo';
import ListFiles from './list-files';
import BranchDropdown from './branch-dropdown';
import {Button} from 'reactstrap';

class RepositoryForm extends Component {
    render() {
        const repoName = this.props.location.pathname.split('/')[2];
        return (
            <div>
                <NavBarRepo/>
                <div>
                    <Link to='/repository'><h2 className="pb-4">{repoName}</h2></Link>
                    <div className="border-dark">
                        <span className="mr-2">Current branch:</span>
                        <BranchDropdown/>
                        <Link to='/repository'><Button className="ml-5" color="primary">Pull request</Button></Link>
                        <ListFiles/>
                    </div>
                </div>
            </div>
        );
    }
}


export default RepositoryForm;