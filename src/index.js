import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import User from './User';
import NewRepository from './NewRepository'
import 'bootstrap/dist/css/bootstrap.css';
import './styles/reset.css';
import './styles/base.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/user' component={User}/>
            <Route path='/new_repository' component={NewRepository}/>
        </Switch>
    </BrowserRouter>
), document.getElementById('root'));