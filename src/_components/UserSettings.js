import React, {Component} from 'react';
import Search from '../HomePage/search'
import Content from './content';
import UserComponent from './user-component';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import UserSettings from "./_components/user-settings";

class UserPage extends Component {
    render() {
        return (
            <div className="flex h-100">
                <aside className="flex flex-column w-300 p-3 s-dark">
                    <Search/>
                    <UserComponent/>
                    <Link to="/new_repository"><Button color="primary">Create a new repo</Button></Link>
                </aside>
                <Content>
                    <UserSettings/>
                </Content>
            </div>
        );
    }
}

export default UserPage;