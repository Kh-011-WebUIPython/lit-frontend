import React, {Component} from 'react';
import UserSettingsForm from './_containers/form';
import UserInfoBlock from '../UserInfoBlock';
import {connect} from "react-redux";
import {userActions, userpageActions} from "../_actions";

class UserSettingsPage extends Component {
    componentDidMount() {
        this.props.getUserInfo();
    };

    render() {
        const {avatar, username, email, signOut, pk} = this.props;
        return (
            <div className="flex h-100">
                <UserInfoBlock avatar={avatar} username={username} signOut={signOut}/>
                <div className="container pt-5 w-100">
                    <UserSettingsForm avatar={avatar} email={email} id={pk}/>
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

const ConnectedUserSettingsPage = connect(mapStateToProps, mapDispatchToProps)(UserSettingsPage);

export default ConnectedUserSettingsPage;