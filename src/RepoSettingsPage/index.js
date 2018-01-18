import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import RepositorySettingsForm from './form';
import NavBarRepo from '../RepoPage/navbar-repo';
import { getIdByName } from '../_helpers';
import { repoActions } from '../_actions';

const RepoSettings = (props) => {
  const { repo } = props.repoUpdate;

  // redirect if repo has already been successfully updated
  if (repo) {
    props.clear();
    const repoPage = props.location.pathname.split('/')
      .reduce((res, cur, ind) => ind === 0 || ind === 3 ? res : `${res}/${cur}`, '');

    return <Redirect to={repoPage} push />;
  }

  const repoName = props.location.pathname.split('/')[2];
  console.log(props.repos);
  const repoId = getIdByName(repoName, props.repos);

  return (
    <div>
      <NavBarRepo />
      <h2 className="pb-2">Update a repository</h2>
      <RepositorySettingsForm id={repoId} name={repoName} />
    </div>
  );
};


const mapStateToProps = state => ({ repos: state.repos, repoUpdate: state.repoUpdate });

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(repoActions.clearUpdate()),
});

const ConnectedRepoSettings = connect(mapStateToProps, mapDispatchToProps)(RepoSettings);

export default ConnectedRepoSettings;
