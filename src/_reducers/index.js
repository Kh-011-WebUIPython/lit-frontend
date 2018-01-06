import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form'

import {authentication} from './authentication.reducer';
import {registration} from './registration.reducer';
import {userinfo} from "./userinfo.reducer";
import {alert} from './alert.reducer';
import {update} from "./updateUserinfo.reducer";

const rootReducer = combineReducers({
    authentication,
    registration,
    userinfo,
    alert,
    update,
    form: formReducer
});

export default rootReducer;