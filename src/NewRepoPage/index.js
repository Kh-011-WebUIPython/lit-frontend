import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CreateRepoForm from './form';
import { repoActions } from '../_actions';

const NewRepoPage = (props) => {
  const { alert, username } = props;
  const { repo } = props.repoCreation;

  if (repo) {
    this.props.clear();
    return <Redirect to={ `/${username}/${repo.name}/empty` } push/>;
  }

  return (
    <CreateRepoForm alert={ alert }/>
  );
};

const mapStateToProps = state => ({
  username: state.userinfo.username, alert: state.alert, repoCreation: state.repoCreation,
});

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(repoActions.clearCreation()),
});

const ConnectedNewRepoPage = connect(mapStateToProps, mapDispatchToProps)(NewRepoPage);

export default ConnectedNewRepoPage;
