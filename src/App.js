import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import NewRepository from './NewRepoPage';
import EmptyRepoPage from './EmptyRepoPage';
import UserSettingsPage from './UserSettingsPage';
import UserPage from './UserPage/index';
import RepositorySettings from './_components/repo-settings-page';
import HomePage from './HomePage';
import OpenPullRequestPage from './_components/open-pull-request-page';
import SearchPage from './_components/search-page';

import 'bootstrap/dist/css/bootstrap.css';
import './_styles/reset.css';
import './_styles/base.css';

class App extends Component {
    render() {
        const {loggedIn} = this.props.authentication;
        console.log(loggedIn);
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={loggedIn ? UserPage : HomePage}/>
                    <Route exact path='/settings' component={UserSettingsPage}/>
                    <Route exact path='/create' component={NewRepository}/>
                    <Route exact path='/:user/:repo/empty' component={EmptyRepoPage}/>
                    <Route path='/:user' component={UserPage}/>
                    <Route path='/repository_settings' component={RepositorySettings}/>
                    {/*<Route path='/repository' component={Repository}/>*/}
                    {/*<Route path='/branches' component={ListBranches}/>*/}
                    {/*<Route path='/commits' component={ListCommits}/>*/}
                    {/*<Route path='/commit' component={Commit}/>*/}
                    {/*<Route path='/file' component={File}/>*/}
                    <Route path='/open_pull_request'
                           component={OpenPullRequestPage}/>
                    {/*<Route path='/pull_request' component={PullRequest}/>*/}
                    <Route path='/search' component={SearchPage}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

function mapStateToProps(state) {
    const {alert, authentication} = state;
    return {alert, authentication};
}

export default connect(mapStateToProps)(App);