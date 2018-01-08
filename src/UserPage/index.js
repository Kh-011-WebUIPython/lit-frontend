import React, {Component} from 'react';
import RepoTabs from './repo-tabs';
import UserInfoBlock from '../UserInfoBlock';
import {connect} from "react-redux";
import {userActions, userpageActions} from "../_actions";
import LoadingPage from "../_components/loading-page";

class UserPage extends Component {
    componentDidMount() {
        this.props.getUserInfo();
    };

    render() {
        if (this.props.userinfo.fetchingUserinfo) {
            return (<LoadingPage/>)
        }
        const {avatar, username} = this.props.userinfo;
        const {signOut} = this.props;
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
        userinfo: state.userinfo
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