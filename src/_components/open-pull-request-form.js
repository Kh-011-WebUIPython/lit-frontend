import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBarRepo from './navbar-repo';
import ListFiles from './list-files';
import BranchDropdown from './branch-dropdown';
import {Button} from 'reactstrap';
import RepositoryTeam from './repo-team';

class OpenPullRequestForm extends Component {


    render() {


        return (

            <div className="container-scroll">
                <NavBarRepo/>
                <div>
                    <RepositoryTeam/>
                    <div className="border-dark">

                    </div>
                </div>
            </div>
        );
    }
}


export default OpenPullRequestForm;