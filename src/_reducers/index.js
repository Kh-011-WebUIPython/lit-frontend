import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { userinfo } from './userinfo.reducer';
import { alert } from './alert.reducer';
import { update } from './update-userinfo.reducer';
import { repoCreation } from './create-repo.reducer';
import { repos } from './get-repo.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  userinfo,
  alert,
  update,
  repoCreation,
  repos,
  form: formReducer,
});

export default rootReducer;
