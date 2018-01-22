import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import RepoSettingsForm from './form';
import { checkActions, repoActions, userpageActions } from '../_actions';

class RepoSettings extends Component {
  constructor(props) {
    super(props);
    const splittedPath = this.props.location.pathname.split('/');
    this.state = {
      name: splittedPath[2],
      username: splittedPath[1],
    };
  }

  componentDidMount() {
    const { checkUserAndRepo, getReposByUsername } = this.props;
    checkUserAndRepo(this.state.username, this.state.name);
    getReposByUsername(this.state.username);
  }

  render() {
    const { deleted } = this.props.repoDelete;
    if (deleted) {
      this.props.clear();
      return (<Redirect to="/" push />);
    }

    const { fetching, failed } = this.props.check;
    if (fetching) {
      return null;
    } else if (failed) {
      return (
        <Redirect to="/404" push />
      );
    }

    if (!this.props.userid.owner) {
      return null;
    }

    const ownerLink = this.state.username === this.props.user ? '/' : `/${this.state.username}`;
    const repoLink = `/${this.state.username}/${this.state.name}`;

    if (this.props.repoUpdate.updated) {
      this.props.clear();
      return (
        <Redirect to={repoLink} push />
      );
    }

    const repoId = this.props.userid.owner.filter(repo => repo.name === this.state.name)[0].id;
    const { _delete } = this.props;
    return (
      <div>
        <div className="flex justify-content-between align-items-baseline">
          <div className="flex justify-content-between align-items-baseline">
            <h2 className="pb-4">
              <Link to={ownerLink}>{ `${this.state.username} ` }</Link>
              / <Link to={repoLink}>{ `${this.state.name} ` }</Link>
              / Update a repository
            </h2>
          </div>
        </div>
        <RepoSettingsForm
          id={repoId}
          name={this.state.name}
          delete={() => {
          console.log(repoId);
          _delete(repoId);
        }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  check: state.check,
  userid: state.userid,
  repoUpdate: state.repoUpdate,
  user: state.user.username,
  repoDelete: state.repoDelete,
});

const mapDispatchToProps = dispatch => ({
  checkUserAndRepo: (username, name) => dispatch(checkActions.checkUserAndRepo(username, name)),
  getReposByUsername: username => dispatch(userpageActions.getReposByUsername(username)),
  clear: () => { dispatch(repoActions.clearUpdate()); dispatch(repoActions.clearDeletion()); },
  _delete: (id) => {
    dispatch(repoActions.delete(id));
  },
});

const ConnectedRepoSettings = connect(mapStateToProps, mapDispatchToProps)(RepoSettings);

export default ConnectedRepoSettings;
