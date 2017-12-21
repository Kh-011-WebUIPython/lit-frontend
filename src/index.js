import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NewRepository from './components/create-repo-page'
import EmptyRepository from './components/empty-repo-page'
import UserPage from './components/user-page';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/reset.css';
import './styles/base.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/user' component={UserPage}/>
            {/*<Route path='/user_settings' component={UserSettings}/>*/}
            <Route path='/new_repository' component={NewRepository}/>
            {/*<Route path='/repository_settings' component={RepositorySettings}/>*/}
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
), document.getElementById('root'));