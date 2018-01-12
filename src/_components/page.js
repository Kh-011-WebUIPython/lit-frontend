import React, {Component} from 'react';
import Search from '../UserPage/search'
import UserInfo from '../UserInfoBlock/user-info';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import {userActions, userpageActions} from "../_actions";
import {connect} from 'react-redux';

class Page extends Component {
    render() {
        const {avatar, username, signOut, children} = this.props;
        return (
            <div className="flex h-100">
                <aside className="flex flex-column w-300 p-3 s-dark">
                    <Search/>
                    <UserInfo username={username} avatar={avatar} signOut={signOut}/>
                    <Link to="/new_repository"><Button color="primary" className="w-100">Create a new
                        repo</Button></Link>
                </aside>
                <div className="container pt-5 w-100">
                    {children}
                </div>
            </div>
        );
    };
}


const mapStateToProps = state => {
    return {
        ...state.userinfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => {
            dispatch(userActions.signOut())
        },
        getUserInfo: () => {
            dispatch(userpageActions.getUserInfo());
        }
    }
};

const ConnectedPage = connect(mapStateToProps, mapDispatchToProps)(Page);

export default ConnectedPage;