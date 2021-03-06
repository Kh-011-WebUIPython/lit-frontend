import React, { Component } from 'react';
import { Alert, Button, Form } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { alertActions, userActions } from '../_actions';
import RenderField from '../_components/render-field';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    dispatch(alertActions.clear());
  }

  submit(values, dispatch) {
    const userData = { username: values.username, password: values.password };
    dispatch(userActions.signIn(userData));
  }

  render() {
    const { handleSubmit, loggingIn, alert } = this.props;
    const message = alert.message && (alert.message.toString() === 'Bad Request'
      ? 'Sorry, something wrong with your login'
      : alert.message.toString());
    return (
      <Form className="ml-auto mr-auto" onSubmit={handleSubmit(this.submit)}>
        { alert.message && <Alert color="danger">{ message }</Alert> }
        <Field
          id="username"
          name="username"
          type="text"
          component={RenderField}
          label="Username"
          required="True"
          autoFocus="True"
        />
        <Field
          id="password"
          name="password"
          type="password"
          component={RenderField}
          label="Password"
          required="True"
        />
        <Button color="primary" type="submit">Sign In</Button>
        { loggingIn &&
        <img alt="spinner" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10607/spinner3.gif" /> }
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  loggingIn: state.authentication.loggingIn,
  alert: state.alert,
});

const SignIn = connect(mapStateToProps)(reduxForm({ form: 'signIn' })(SignInForm));

export default SignIn;
