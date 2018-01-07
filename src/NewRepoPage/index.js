import React, {Component} from 'react';
import CreateRepoForm from './form';
import UserInfoBlock from '../UserInfoBlock';
import {connect} from "react-redux";
import {userActions, userpageActions} from "../_actions";
import {Redirect} from 'react-router-dom';

class NewRepoPage extends Component {
    componentDidMount() {
        this.props.getUserInfo();
    };

    render() {
        console.log(this.props);
        const {avatar, username, signOut, alert} = this.props;
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
        ...state.userinfo, alert: state.alert, repoCreation: state.repoCreation
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