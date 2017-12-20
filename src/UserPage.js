import React, {Component} from 'react';
import Search from './components/search'
import Content from './components/content';
import UserComponent from './components/user-component';
import {Button} from 'reactstrap';
import RepoTabs from './components/repository-list'
import {Link} from 'react-router-dom';

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
                    <RepoTabs/>
                </Content>
            </div>
        );
    }
}

export default UserPage;