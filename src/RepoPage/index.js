import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import ListFiles from './list-files';
import CloneLink from './popover';
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
    const { repo, failed } = this.props.check;
    if (!repo) {
      return null;
    } else if (failed) {
      return (
        <Redirect to="/404" push />
      );
    }

    const { username, name } = this.state;
    const ownerLink = username === this.props.user ? '/' : `/${username}`;
    const settingsLink = `${this.props.location.pathname}/settings`;
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem><Link to={ownerLink}>{ `${username} ` }</Link></BreadcrumbItem>
          <BreadcrumbItem active>{ name }</BreadcrumbItem>
        </Breadcrumb>
        <div className="flex justify-content-between align-items-baseline">
          <div><span className="mr-2">Current branch:</span>
            <BranchDropdown />
          </div>
          <div>
            <CloneLink id={this.props.check.repo.id} />
            <Link to={settingsLink}>Settings</Link>
          </div>
        </div>
        <ListFiles />
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
