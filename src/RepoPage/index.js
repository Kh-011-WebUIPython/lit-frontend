import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ListFiles from './list-files';
import BranchDropdown from './branch-dropdown';
import { checkActions } from '../_actions/check.actions';

class RepoPage extends Component {
  constructor(props) {
    super(props);
    const splittedPath = this.props.location.pathname.split('/');
    this.state = {
      name: splittedPath[2],
      username: splittedPath[1],
    };
  }

  componentDidMount() {
    const { checkUserAndRepo } = this.props;
    checkUserAndRepo(this.state.username, this.state.name);
  }

  render() {
    const { fetching, failed } = this.props.check;
    if (fetching) {
      return null;
    } else if (failed) {
      return (
        <Redirect to="/404" push />
      );
    }

    const ownerLink = this.state.username === this.props.user ? '/' : `/${this.state.username}`;
    const settingsLink = `${this.props.location.pathname}/settings`;
    return (
      <div>
        <div className="flex justify-content-between align-items-baseline">
          <h2 className="pb-4">
            <Link to={ownerLink}>{`${this.state.username} `}</Link>
            / {this.state.name}
          </h2>
          <Link to={settingsLink}>Settings</Link>
        </div>
        <div className="border-dark">
          <span className="mr-2">Current branch:</span>
          <BranchDropdown />
          <ListFiles />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ check: state.check, user: state.user.username });

const mapDispatchToProps = dispatch => ({
  checkUserAndRepo: (username, name) => dispatch(checkActions.checkUserAndRepo(username, name)),
});

const ConnectedRepoPage = connect(mapStateToProps, mapDispatchToProps)(RepoPage);

export default ConnectedRepoPage;
