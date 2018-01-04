import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBarRepo from './navbar-repo';
import ListBranches from './list-branches';

class ListBranchesForm extends Component {


    render() {


        return (

            <div>
                <NavBarRepo/>
                <div>
                    <Link to='/repository'><h2 className="py-4">RepoName</h2>
                    </Link>
                    <div className="border-dark">
                        <ListBranches/>
                    </div>
                </div>
            </div>
        );
    }
}


export default ListBranchesForm;