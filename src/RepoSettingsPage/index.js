import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import RepositorySettingsForm from './form';
import { getIdByName } from '../_helpers';
import { repoActions } from '../_actions';

const RepoSettings = (props) => {
  const { repo } = props.repoUpdate;

  // redirect if repo has already been successfully updated
  if (repo) {
    props.clear();
    // 0 is empty and 3 is 'settings', we don't need it
    const repoPage = props.location.pathname.split('/')
      .reduce((res, cur, ind) => (ind === 0 || ind === 3 ? res : `${res}/${cur}`), '');

    return <Redirect to={repoPage} push />;
  }

  const repoName = props.location.pathname.split('/')[2];
  const repoId = getIdByName(repoName, props.repos);

  // todo: add breadcrumbs
  // todo: check if it exists before rendering
  return (
    <div>
      <div className="flex justify-content-between align-items-baseline">
        {/*<h2 className="pb-4">*/}
          {/*<Link to={ownerLink}>{`${this.state.username} `}</Link>*/}
          {/*/ {this.state.name}*/}
        {/*</h2>*/}
        <h2 className="pb-2">Update a repository</h2>
        <span>Settings</span>
      </div>
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
