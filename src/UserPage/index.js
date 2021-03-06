import React, { Component } from 'react';
import { connect } from 'react-redux';

import RepoTabs from './repo-tabs';
import { repoActions } from '../_actions';
import LoadingPage from '../_components/loading-page';

class UserPage extends Component {
  componentDidMount() {
    const { id } = this.props.user;
    if (id) {
      this.props.getRepos(id);
    }
  }

  render() {
    if (this.props.repos.fetching) {
      return (<LoadingPage />);
    }
    return (<RepoTabs />);
  }
}

const mapStateToProps = state => ({
  user: state.user, repos: state.userRepos,
});

const mapDispatchToProps = dispatch => ({
  getRepos: id => dispatch(repoActions.getByUser(id)),
});

const ConnectedUserPage = connect(mapStateToProps, mapDispatchToProps)(UserPage);

export default ConnectedUserPage;
