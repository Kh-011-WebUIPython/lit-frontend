import React, { Component } from 'react';
import { Alert, Button, Form } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';

import { alertActions, userActions } from '../_actions';
import FieldFileInput from './field-file-input';
import ConfirmModal from '../_components/confirm-modal';
import RenderField from '../_components/render-field';

class UserSettingsForm extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    dispatch(alertActions.clear());
  }

  submit(values, dispatch) {
    const { avatar, email } = values;
    if (!avatar && !email) {
      dispatch(alertActions.error('You haven\'t filled in any fields.'));
      return;
    }
    dispatch(userActions.update({ avatar, email }));
  }
  // todo: try to add an initial value
  // https://github.com/facebook/react/issues/2764
  render() {
    const { handleSubmit, updating, alert } = this.props;
    const message = alert.message && (alert.message.toString() === 'Bad Request' ?
      'Sorry, password is incorrect' : alert.message.toString());
    return (
      <div>
        <Form className="w-50" onSubmit={handleSubmit(this.submit)}>
          {alert.message && <Alert color="danger">{message}</Alert>}
          <Field
            id="email"
            name="email"
            type="email"
            component={RenderField}
            label="E-mail"
          />
          <Field
            id="avatar"
            name="avatar"
            type="file"
            component={FieldFileInput}
            label="Avatar"
          />
          <Button color="primary" type="submit">Confirm</Button>
          {updating &&
          <img alt="spinner" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10607/spinner3.gif" />}
        </Form>
        <ConfirmModal delete={this.props.delete} />
      </div>
    );
  }
}

export default reduxForm({ form: 'userSettings' })(UserSettingsForm);
