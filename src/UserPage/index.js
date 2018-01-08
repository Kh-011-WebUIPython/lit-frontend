import React, {Component} from 'react';
import RepoTabs from './repo-tabs';
import UserInfoBlock from '../UserInfoBlock';
import {connect} from "react-redux";
import {repoActions, userActions, userpageActions} from "../_actions";
import LoadingPage from "../_components/loading-page";

class UserPage extends Component {
    componentDidMount() {
        this.props.getUserInfo();
    };

    render() {
        if (this.props.userinfo.fetchingUserinfo) {
            return (<LoadingPage/>)
        }
        const {avatar, username, repos} = this.props.userinfo;
        const {signOut} = this.props;
        return (
            <div className="flex h-100">
                <UserInfoBlock avatar={avatar} username={username} signOut={signOut}/>
                <div className="container pt-5 w-100">
                    <RepoTabs repos={repos}/>
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
            dispatch(userpageActions.getUserInfoWithRepos());
        },
        getRepos: (id, status) => {
            dispatch(repoActions.getByUser(id, status))
        }
    }
};

const ConnectedUserPage = connect(mapStateToProps, mapDispatchToProps)(UserPage);

export default ConnectedUserPage;