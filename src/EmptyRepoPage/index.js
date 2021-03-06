import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import Code from '../_components/code';
import { checkActions } from '../_actions';

class EmptyRepoPage extends Component {
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
    const { failed, repo } = this.props.check;
    if (!repo) {
      return null;
    } else if (failed) {
      return (
        <Redirect to="/404" push />
      );
    }

    const { username, name } = this.state;
    const ownerLink = username === this.props.user ? '/' : `/${username}`;
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem><Link to={ownerLink}>{ `${username} ` }</Link></BreadcrumbItem>
          <BreadcrumbItem active>{ name }</BreadcrumbItem>
        </Breadcrumb>
        <ul className="list-unstyled">
          <li>
            <h4 className="pb-3">Don't know what to do next? We can help you!</h4>
            <h5 className="mb-2">1. You can create a new repository from command line:</h5>
            <Code>lit init</Code>
            <Code>lit add file_name</Code>
            <Code>lit commit -m "Your commit for commit"</Code>
            <Code>lit remote add origin http://litvcs.win/repositories/{this.props.check.repo.id}</Code>
            <Code>lit push -u origin master</Code>
          </li>
          <li>
            <h5 className="mt-4 mb-2">2. Or you can push already existing project</h5>
            <Code>lit remote add origin https://litvcs.win/lit-project1.git</Code>
            <Code>lit push -u origin master</Code>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ check: state.check, user: state.user.username });

const mapDispatchToProps = dispatch => ({
  checkUserAndRepo: (username, name) => dispatch(checkActions.checkUserAndRepo(username, name)),
});

const ConnectedEmptyRepoPage = connect(mapStateToProps, mapDispatchToProps)(EmptyRepoPage);

export default ConnectedEmptyRepoPage;
