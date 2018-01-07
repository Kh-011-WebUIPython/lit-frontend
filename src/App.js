import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import NewRepository from './NewRepoPage';
import EmptyRepoPage from './EmptyRepoPage';
import UserSettingsPage from './UserSettingsPage';
import UserPage from './UserPage/index';
import RepositorySettings from './_components/repo-settings-page';
import HomePage from './HomePage';

import 'bootstrap/dist/css/bootstrap.css';
import './_styles/reset.css';
import './_styles/base.css';

class App extends Component {
    render() {
        const {loggedIn} = this.props.authentication;

        const PrivateRoute = ({component: Component, ...rest}) => (
            <Route {...rest} render={props => (
                loggedIn ? (
                    <Component {...props}/>
                ) : (
                    <Redirect to={{
                        pathname: '/',
                        state: {from: props.location}
                    }}/>
                )
            )}/>
        );

        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={loggedIn ? UserPage : HomePage}/>
                    <PrivateRoute exact path='/settings' component={UserSettingsPage}/>
                    <PrivateRoute exact path='/create' component={NewRepository}/>
                    <PrivateRoute exact path='/:user/:repo/empty' component={EmptyRepoPage}/>
                    <PrivateRoute path='/:user' component={UserPage}/>
                    <PrivateRoute path='/repository_settings' component={RepositorySettings}/>
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