import React, {Component} from 'react';
import {connect} from "react-redux";
import UserSettingsForm from './_containers/form';
import UserInfoBlock from '../UserInfoBlock';
import {userActions, userpageActions} from "../_actions";
import LoadingPage from '../_components/loading-page';

class UserSettingsPage extends Component {
    componentDidMount() {
        this.props.getUserInfo();
    };

    render() {
        if (this.props.userinfo.fetchingUserinfo) {
            return (<LoadingPage/>)
        }
        const {avatar, username, email, pk} = this.props.userinfo;
        const {signOut} = this.props;
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
        userinfo: state.userinfo, alert: state.alert
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