import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { userinfo } from './userinfo.reducer';
import { alert } from './alert.reducer';
import { update } from './update-userinfo.reducer';
import { repoCreation } from './create-repo.reducer';
import { repoUpdate } from './update-repo.reducer';
import { repos } from './get-repo.reducer';
import { check } from './check.reducer';
import { userid } from './userid.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  userinfo,
  alert,
  update,
  repoCreation,
  repos,
  repoUpdate,
  check,
  userid,
  form: formReducer,
});

export default rootReducer;
