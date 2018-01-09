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
        if (this.props.userinfo.fetchingUserinfo || this.props.repos.fetchingRepos) {
            return (<LoadingPage/>)
        }
        const {avatar, username} = this.props.userinfo;
        const {owner, contributor} = this.props.repos;
        const {signOut, repos} = this.props;
        console.log(JSON.stringify(owner));
        return (
            <div className="flex h-100">
                <UserInfoBlock avatar={avatar} username={username} signOut={signOut}/>
                <div className="container pt-5 w-100">
                    <RepoTabs owner={owner}/>
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        userinfo: state.userinfo, repos: state.repos,
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