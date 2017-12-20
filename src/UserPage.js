import React, {Component} from 'react';
import Search from './components/search'
import Content from './components/content';
import UserComponent from './components/user-component';
import {Button} from 'reactstrap';
import RepoTabs from './components/repository-list'

class UserPage extends Component {
    render() {
        return (
            <div className="flex h-100">
                <aside className="flex flex-column w-300 p-3 s-dark">
                    <Search/>
                    <UserComponent/>
                    <Button color="primary">Create a new repo</Button>
                </aside>
                <Content>
                    <RepoTabs/>
                </Content>
            </div>
        );
    }
}

export default UserPage;