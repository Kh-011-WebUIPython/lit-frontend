import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { alert } from './alert.reducer';
import { authentication } from './authentication.reducer';
import { check } from './check.reducer';
import { registration } from './registration.reducer';
import { repoCreate } from './repo-create.reducer';
import { repoDelete } from './repo-deletion.reducer';
import { repoUpdate } from './repo-update.reducer';
import { user } from './user.reducer';
import { userRepos } from './user-repos.reducer';
import { userUpdate } from './user-update.reducer';
import { userid } from './userid.reducer';

const rootReducer = combineReducers({
  alert,
  authentication,
  check,
  form: formReducer,
  registration,
  repoCreate,
  repoDelete,
  repoUpdate,
  user,
  userRepos,
  userUpdate,
  userid,
});

export default rootReducer;
