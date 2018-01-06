import React, {Component} from 'react';
import RepoTabs from './repo-tabs';
import UserInfoBlock from '../UserInfoBlock';
import {connect} from "react-redux";
import {userActions, userpageActions} from "../_actions";

class UserPage extends Component {
    componentDidMount() {
        this.props.getUserInfo();
    };

    render() {
        const {avatar, username, signOut} = this.props;
        return (
            <div className="flex h-100">
                <UserInfoBlock avatar={avatar} username={username} signOut={signOut}/>
                <div className="container pt-5 w-100">
                    <RepoTabs/>
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

const ConnectedUserPage = connect(mapStateToProps, mapDispatchToProps)(UserPage);

export default ConnectedUserPage;