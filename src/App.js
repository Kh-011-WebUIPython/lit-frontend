import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import HomePage from './HomePage';

import 'bootstrap/dist/css/bootstrap.css';
import './_styles/reset.css';
import './_styles/base.css';

class App extends Component {
    render() {
        const {loggedIn} = this.props.authentication;
        console.log(loggedIn);

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
        return (
            <BrowserRouter>
                <Switch>
                    {/*<Route exact path='/' components={{sidebar: UserInfoBlock, content: UserPage}}/>*/}
                    {/*<Route exact path='/settings' components={{sidebar: UserInfoBlock, content: UserSettingsPage}}/>*/}
                    {/*<Route exact path='/create' component={NewRepository}/>*/}
                    {/*<Route exact path='/:user/:repo/empty' component={EmptyRepoPage}/>*/}
                    {/*<Route path='/:user' component={UserPage}/>*/}
                    {/*<Route path='/repository_settings' component={RepositorySettings}/>*/}
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