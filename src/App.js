import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import HomePage from './HomePage';
import UserInfoBlock from './UserInfoBlock';
import UserPage from './UserPage';
import UserSettingsPage from './UserSettingsPage';
import NewRepoPage from './NewRepoPage';
import EmptyRepoPage from './EmptyRepoPage';

import 'bootstrap/dist/css/bootstrap.css';
import './_styles/reset.css';
import './_styles/base.css';

import {userActions, userpageActions} from "./_actions";

class App extends Component {
    componentDidMount() {
        this.props.getUserInfo();
    }

    render() {
        const {loggedIn} = this.props.authentication;

        if (!loggedIn) {
            return (
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Redirect to="/"/>
                    </Switch>
                </BrowserRouter>
            );
        }

        const {avatar, username} = this.props.userinfo;
        const {signOut} = this.props;

        return (
            <BrowserRouter>
                <div className="flex h-100">
                    <UserInfoBlock avatar={avatar} username={username} signOut={signOut}/>
                    <div className="container pt-5 w-100">
                        <Route exact path='/' component={UserPage}/>
                        <Route exact path='/settings' component={UserSettingsPage}/>
                        <Route exact path='/create' component={NewRepoPage}/>
                        <Route exact path='/:user/:repo/empty' component={EmptyRepoPage}/>
                        {/*<Route path='/:user' component={UserPage}/>*/}
                        {/*<Route path='/repository_settings' component={RepositorySettings}/>*/}
                        {/*<Route path='/repository' component={Repository}/>*/}
                        {/*<Route path='/branches' component={ListBranches}/>*/}
                        {/*<Route path='/commits' component={ListCommits}/>*/}
                        {/*<Route path='/commit' component={Commit}/>*/}
                        {/*<Route path='/file' component={File}/>*/}
                        {/*<Route path='/open_pl' component={OpenPullRequest}/>*/}
                        {/*<Route path='/pull_request' component={PullRequest}/>*/}
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

function mapStateToProps(state) {
    const {alert, authentication, userinfo} = state;
    return {alert, authentication, userinfo};
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => {
            dispatch(userActions.signOut())
        },
        getUserInfo: () => {
            dispatch(userpageActions.getUserInfo());
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);