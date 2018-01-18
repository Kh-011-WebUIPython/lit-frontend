import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

import HomePage from './HomePage';
import UserInfoBlock from './UserInfoBlock';
import UserPage from './UserPage';
import UserSettingsPage from './UserSettingsPage';
import NewRepoPage from './NewRepoPage';
import EmptyRepoPage from './EmptyRepoPage';
import RepoPage from './RepoPage';
import RepositorySettings from './RepoSettingsPage/index';

import './_styles/reset.css';
import './_styles/base.css';

import { userActions, userpageActions } from './_actions';
import ConnectedNotFoundPage from './_components/not-found';

class App extends Component {
  componentDidMount() {
    this.props.getUserInfo();
  }

  render() {
    const { loggedIn } = this.props.authentication;

    if (!loggedIn) {
      return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      );
    }

    const { avatar, username } = this.props.userinfo;
    const { signOut } = this.props;

    if (!this.props.userinfo.id) {
      return null;
    }
    console.log('here commes die roiter', this.props.userinfo.id);
    return (
      <BrowserRouter>
        <div className="flex h-100">
          <UserInfoBlock avatar={avatar} username={username} signOut={signOut} />
          <div className="container pt-5 w-100">
            <Switch>
              <Route exact path="/" component={UserPage} />
              <Route exact path="/settings" component={UserSettingsPage} />
              <Route exact path="/create" component={NewRepoPage} />
              <Route exact path="/:user/:repo/empty" component={EmptyRepoPage} />
              <Route exact path="/:user/:repo" component={RepoPage} />
              <Route path="/:user/:repo/settings" component={RepositorySettings} />
              {/*<Route exact path="/404" component={ConnectedNotFoundPage} />*/}
              <Route component={ConnectedNotFoundPage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  const { alert, authentication, userinfo } = state;
  return { alert, authentication, userinfo };
}

const mapDispatchToProps = dispatch => (
  {
    signOut: () => dispatch(userActions.signOut()),
    getUserInfo: () => dispatch(userpageActions.getUserInfo()),
  });

export default connect(mapStateToProps, mapDispatchToProps)(App);
