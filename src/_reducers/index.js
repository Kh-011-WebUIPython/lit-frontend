import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
// import { users } from './users.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    // users,
    alert,
    form: formReducer
});

export default rootReducer;