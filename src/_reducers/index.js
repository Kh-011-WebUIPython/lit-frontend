import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form'

import {authentication} from './authentication.reducer';
import {registration} from './registration.reducer';
import {userinfo} from "./userinfo.reducer";
import {alert} from './alert.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    userinfo,
    alert,
    form: formReducer
});

export default rootReducer;