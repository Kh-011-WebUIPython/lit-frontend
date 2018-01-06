import React, {Component} from 'react';
import CreateRepoForm from './form';
import UserInfoBlock from '../UserInfoBlock';
import {connect} from "react-redux";
import {userActions, userpageActions} from "../_actions";

class NewRepoPage extends Component {
    componentDidMount() {
        this.props.getUserInfo();
    };

    render() {
        const {avatar, username, signOut, alert} = this.props;
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
        ...state.userinfo, alert: state.alert
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