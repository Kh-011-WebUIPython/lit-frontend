import React from 'react';
import Search from '../HomePage/search'
import UserComponent from './user-component';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

const UserPage = props => {
    return (
        <div className="flex h-100">
            <aside className="flex flex-column w-300 p-3 s-dark">
                <Search/>
                <UserComponent/>
                <Link to="/new_repository"><Button color="primary" className="w-100">Create a new
                    repo</Button></Link>
            </aside>
            <div className="container pt-5 w-100">
                {props.children}
            </div>
        </div>
    );
}

export default UserPage;