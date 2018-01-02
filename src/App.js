import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import NewRepository from './_components/create-repo-page';
import EmptyRepository from './_components/empty-repo-page';
import UserSettingsPage from './_components/user-settings-page';
import UserPage from './_components/user-page';
import RepositorySettings from './_components/repo-settings-page';
import HomePage from './HomePage/index';

import 'bootstrap/dist/css/bootstrap.css';
import './_styles/reset.css';
import './_styles/base.css';

const App = props => {
    return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/user' component={UserPage}/>
                    <Route path='/user_settings' component={UserSettingsPage}/>
                    <Route path='/new_repository' component={NewRepository}/>
                    <Route path='/repository_settings' component={RepositorySettings}/>
                    <Route path='/empty_repository' component={EmptyRepository}/>
                    {/*<Route path='/repository' component={Repository}/>*/}
                    {/*<Route path='/branches' component={ListBranches}/>*/}
                    {/*<Route path='/commits' component={ListCommits}/>*/}
                    {/*<Route path='/commit' component={Commit}/>*/}
                    {/*<Route path='/file' component={File}/>*/}
                    {/*<Route path='/open_pl' component={OpenPullRequest}/>*/}
                    {/*<Route path='/pull_request' component={PullRequest}/>*/}
                </Switch>
            </BrowserRouter>
    );
}

export default App;