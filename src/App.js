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
import RepoSettings from './RepoSettingsPage';

import './_styles/reset.css';
import './_styles/base.css';

import { userActions, userpageActions } from './_actions';
import NotFoundPage from './_components/not-found';

class App extends Component {
  componentDidMount() {
    this.props.getUser();
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

    const { avatar, username } = this.props.user;
    const { signOut } = this.props;

    if (!this.props.user.id) {
      return null;
    }

    return (
      <BrowserRouter>
        <div className="flex flex-column flex-md-row h-100-lg">
          <UserInfoBlock avatar={avatar} username={username} signOut={signOut} />
          <div className="container pt-2 pt-md-5 w-100">
            <Switch>
              <Route exact path="/" component={UserPage} />
              <Route exact path="/settings" component={UserSettingsPage} />
              <Route exact path="/create" component={NewRepoPage} />
              <Route exact path="/:user/:repo/empty" component={EmptyRepoPage} />
              <Route exact path="/:user/:repo" component={RepoPage} />
              <Route path="/:user/:repo/settings" component={RepoSettings} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  const { alert, authentication, user } = state;
  return { alert, authentication, user };
};

const mapDispatchToProps = dispatch => (
  {
    signOut: () => dispatch(userActions.signOut()),
    getUser: () => dispatch(userpageActions.getUser()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
