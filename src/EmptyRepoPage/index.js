import React, {Component} from 'react';
import EmptyRepoForm from './empty-repo-form';
import UserInfoBlock from '../UserInfoBlock';
import {connect} from "react-redux";
import {userActions, userpageActions} from "../_actions";


class EmptyRepoPage extends Component {
    componentDidMount() {
        this.props.getUserInfo();
    };

    render() {
        //location.pathname is /{username}/{repoName}/empty
        const repoName = this.props.location.pathname.split('/')[2];

        const {avatar, username, signOut} = this.props;
        return (
            <div className="flex h-100">
                <UserInfoBlock avatar={avatar} username={username} signOut={signOut}/>
                <div className="container pt-5 w-100">
                    <EmptyRepoForm repoName={repoName}/>
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


const ConnectedEmptyRepoPage = connect(mapStateToProps, mapDispatchToProps)(EmptyRepoPage);

export default ConnectedEmptyRepoPage;