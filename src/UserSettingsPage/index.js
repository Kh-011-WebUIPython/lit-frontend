import React from 'react';
import { connect } from 'react-redux';
import UserSettingsForm from './form';
import { userActions } from '../_actions';

const UserSettingsPage = (props) => {
  const { pk } = props.userinfo;
  const { _delete, alert, updating } = props;
  return (
    <UserSettingsForm id={pk} delete={_delete} alert={alert} updating={updating} />
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
