import React, {Component} from 'react';
import {connect} from "react-redux";
import UserSettingsForm from './form';
import {userActions} from "../_actions";

class UserSettingsPage extends Component {
    render() {
        const {pk} = this.props.userinfo;
        const {_delete, alert, updating} = this.props;
        return (
            <UserSettingsForm id={pk} delete={_delete} alert={alert} updating={updating}/>
        );
    };
}

const mapStateToProps = state => {
    return {
        userinfo: state.userinfo, alert: state.alert, updating: state.update.updating,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => {
            dispatch(userActions.signOut())
        },
        _delete: () => {
            dispatch(userActions.delete())
        }
    }
};

const ConnectedUserSettingsPage = connect(mapStateToProps, mapDispatchToProps)(UserSettingsPage);

export default ConnectedUserSettingsPage;