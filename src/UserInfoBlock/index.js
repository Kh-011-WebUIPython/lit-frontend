import React, {Component} from 'react';
import Search from './search'
import UserInfo from '../UserInfoBlock/user-info';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

class UserInfoBlock extends Component {
    render() {
        const {avatar, username, signOut} = this.props;
        return (
            <aside className="flex flex-column w-300 p-3 s-dark">
                <Search/>
                <UserInfo username={username} avatar={avatar} signOut={signOut}/>
                <Link to="/create">
                    <Button color="primary" className="w-100">Create a new repo</Button>
                </Link>
            </aside>
        );
    };
}

export default UserInfoBlock;