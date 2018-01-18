import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import NavBarRepo from './navbar-repo';
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

    return (
      <div>
        <NavBarRepo />
        <div>
          <Link to="/repository"><h2 className="pb-4">{'repoName '}</h2></Link>
          <div className="border-dark">
            <span className="mr-2">Current branch:</span>
            <BranchDropdown />
            <Link to="/repository">
              <Button className="ml-5" color="primary">Pull request</Button>
            </Link>
            <ListFiles />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ check: state.check });

const mapDispatchToProps = dispatch => ({
  checkUserAndRepo: (username, name) => dispatch(checkActions.checkUserAndRepo(username, name)),
});

const ConnectedRepoPage = connect(mapStateToProps, mapDispatchToProps)(RepoPage);

export default ConnectedRepoPage;
