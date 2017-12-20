import React, {Component} from 'react';
import Search from './components/search'
import ContentNewRepo from './components/content-new-repo';
import UserComponent from './components/user-component';
import {Button} from 'reactstrap';
import Content from './components/content'

class NewRepository extends Component {
    render() {
        return (
            <div className="flex h-100">
                <aside className="flex flex-column w-300 p-3 s-dark">
                    <Search/>
                    <UserComponent/>
                    <Button color="primary">Create a new repo</Button>
                </aside>
                <Content>
                    <ContentNewRepo/>
                </Content>
            </div>
        );
    }
}

export default NewRepository;