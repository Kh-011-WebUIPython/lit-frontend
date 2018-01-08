import React, {Component} from 'react';
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
import CreateRepoForm from './form';
import UserInfoBlock from '../UserInfoBlock';
import {userActions, userpageActions} from "../_actions";
import LoadingPage from '../_components/loading-page';

class NewRepoPage extends Component {
    componentDidMount() {
        this.props.getUserInfo();
    };

    render() {
        if (this.props.userinfo.fetchingUserinfo) {
            return (<LoadingPage/>)
        }
        const {avatar, username} = this.props.userinfo;
        const {alert, signOut} = this.props;
        const {repo} = this.props.repoCreation;

        if (repo) {
            return <Redirect to={`/${username}/${repo.name}/empty`} push={true}/>
        }

        return (
            <div className="flex h-100">
                <UserInfoBlock avatar={avatar} username={username} signOut={signOut}/>
                <div className="container pt-5 w-100">
                    <CreateRepoForm alert={alert}/>
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        userinfo: state.userinfo, alert: state.alert, repoCreation: state.repoCreation
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

const ConnectedNewRepoPage = connect(mapStateToProps, mapDispatchToProps)(NewRepoPage);

export default ConnectedNewRepoPage;