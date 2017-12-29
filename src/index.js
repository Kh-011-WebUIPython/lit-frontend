import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NewRepository from './components/create-repo-page';
import EmptyRepository from './components/empty-repo-page';
import UserSettingsPage from './components/user-settings-page';
import UserPage from './components/user-page';
import RepositorySettings from './components/repo-settings-page';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/reset.css';
import './styles/base.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import RepositoryPage from "./components/repo-page";
import ListBranchesPage from "./components/list-branches-page";


ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/user' component={UserPage}/>
            <Route path='/user_settings' component={UserSettingsPage}/>
            <Route path='/new_repository' component={NewRepository}/>
            <Route path='/repository_settings' component={RepositorySettings}/>
            <Route path='/empty_repository' component={EmptyRepository}/>
            <Route path='/repository' component={RepositoryPage}/>
            <Route path='/branches' component={ListBranchesPage}/>
            <Route path='/commits' component={ListCommitsPage}/>
            {/*<Route path='/commit' component={Commit}/>*/}
            {/*<Route path='/file' component={File}/>*/}
            {/*<Route path='/open_pl' component={OpenPullRequest}/>*/}
            {/*<Route path='/pull_request' component={PullRequest}/>*/}
        </Switch>
    </BrowserRouter>
), document.getElementById('root'));