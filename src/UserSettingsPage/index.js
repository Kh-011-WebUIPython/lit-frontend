import React from 'react';
import { connect } from 'react-redux';
import UserSettingsForm from './form';
import { userActions } from '../_actions';

const UserSettingsPage = (props) => {
  const { pk } = props.userinfo;
  const { _delete, alert, updating } = props;
  return (
    <div>
      <h1 className="mb-2">Settings</h1>
      <UserSettingsForm id={pk} delete={_delete} alert={alert} updating={updating} />
    </div>
  );
};

const mapStateToProps = state => ({
  userinfo: state.userinfo, alert: state.alert, updating: state.update.updating,
});

const mapDispatchToProps = dispatch => ({
  signOut: () => {
    dispatch(userActions.signOut());
  },
  _delete: () => {
    dispatch(userActions.delete());
  },
});

const ConnectedUserSettingsPage = connect(mapStateToProps, mapDispatchToProps)(UserSettingsPage);

export default ConnectedUserSettingsPage;
