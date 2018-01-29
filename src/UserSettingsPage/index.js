import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import UserSettingsForm from './form';
import { userActions } from '../_actions';

const UserSettingsPage = (props) => {
  const { pk, username } = props.user;
  const { _delete, alert, updating } = props;
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem><Link to="/">{ `${username} ` }</Link></BreadcrumbItem>
        <BreadcrumbItem active>Settings</BreadcrumbItem>
      </Breadcrumb>
      <UserSettingsForm id={pk} _delete={_delete} alert={alert} updating={updating} />
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user, alert: state.alert, updating: state.userUpdate.updating,
});

const mapDispatchToProps = dispatch => ({
  _delete: () => dispatch(userActions.delete()),
});

const ConnectedUserSettingsPage = connect(mapStateToProps, mapDispatchToProps)(UserSettingsPage);

export default ConnectedUserSettingsPage;
