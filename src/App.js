import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import NewRepository from './_components/create-repo-page';
import EmptyRepository from './_components/empty-repo-page';
import UserSettingsPage from './_components/user-settings-page';
import UserPage from './_components/user-page';
import RepositorySettings from './_components/repo-settings-page';
import HomePage from './HomePage/index';

import 'bootstrap/dist/css/bootstrap.css';
import './_styles/reset.css';
import './_styles/base.css';

import {store} from './_helpers';
import RepositoryPage from './_components/repo-page';
import ListBranchesPage from './_components/list-branches-page';
import ListCommitsPage from './_components/list-commits-page';
import OpenPullRequestPage from './_components/open-pull-request-page';
import SearchPage from './_components/search-page';
import CommitPage from './_components/commit-page';

const App = props => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/user' component={UserPage}/>
                    <Route path='/user_settings' component={UserSettingsPage}/>
                    <Route path='/new_repository' component={NewRepository}/>
                    <Route path='/repository_settings'
                           component={RepositorySettings}/>
                    <Route path='/empty_repository'
                           component={EmptyRepository}/>
                    <Route path='/repository' component={RepositoryPage}/>
                    <Route path='/branches' component={ListBranchesPage}/>
                    <Route path='/commits' component={ListCommitsPage}/>
                    <Route path='/commit' component={CommitPage}/>
                    {/*<Route path='/file' component={File}/>*/}
                    <Route path='/open_pull_request'
                           component={OpenPullRequestPage}/>
                    {/*<Route path='/pull_request' component={PullRequest}/>*/}
                    <Route path='/search' component={SearchPage}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;