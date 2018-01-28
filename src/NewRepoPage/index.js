import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import CreateRepoForm from './form';
import { repoActions } from '../_actions';

const NewRepoPage = (props) => {
  const { alert, username } = props;
  const { repo } = props.repoCreate;

  if (repo) {
    props.clear();
    return <Redirect to={`/${username}/${repo.name}/empty`} push />;
  }

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem><Link to="/">{ `${username} ` }</Link></BreadcrumbItem>
        <BreadcrumbItem active>New repository</BreadcrumbItem>
      </Breadcrumb>
      <CreateRepoForm alert={alert} />
    </div>
  );
};

const mapStateToProps = state => ({
  username: state.user.username, alert: state.alert, repoCreate: state.repoCreate,
});

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(repoActions.clearCreation()),
});

const ConnectedNewRepoPage = connect(mapStateToProps, mapDispatchToProps)(NewRepoPage);

export default ConnectedNewRepoPage;
