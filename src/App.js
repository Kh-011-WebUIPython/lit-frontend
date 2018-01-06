import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import NewRepository from './NewRepoPage';
import EmptyRepository from './_components/empty-repo-page';
import UserSettingsPage from './UserSettingsPage/index';
import UserPage from './UserPage/index';
import RepositorySettings from './_components/repo-settings-page';
import HomePage from './HomePage/index';

import {history} from './_helpers';
import {alertActions} from './_actions';

import 'bootstrap/dist/css/bootstrap.css';
import './_styles/reset.css';
import './_styles/base.css';

class App extends Component {
    constructor(props) {
        super(props);
        const {dispatch} = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const {loggedIn} = this.props.authentication;
        console.log(loggedIn);
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={loggedIn ? UserPage : HomePage}/>
                    <Route path='/settings' component={UserSettingsPage}/>
                    <Route path='/create' component={NewRepository}/>
                    <Route path='/:user' component={UserPage}/>
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
}

function mapStateToProps(state) {
    const {alert, authentication} = state;
    return {alert, authentication};
}

export default connect(mapStateToProps)(App);