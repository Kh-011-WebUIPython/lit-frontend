import React, {Component} from 'react';
import NavBarRepo from './navbar-repo';
import ListBranches from './list-branches';
import RepositoryTeam from './repo-team';

class ListBranchesForm extends Component {


    render() {


        return (

            <div>
                <NavBarRepo/>
                <div>
                    <RepositoryTeam/>
                    <div className="border-dark">
                        <ListBranches/>
                    </div>
                </div>
            </div>
        );
    }
}


export default ListBranchesForm;