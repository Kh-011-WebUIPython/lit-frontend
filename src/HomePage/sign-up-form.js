import React, { Component } from 'react';
import { Alert, Button, Form } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { alertActions, userActions } from '../_actions';
import RenderField from '../_components/render-field';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    dispatch(alertActions.clear());
  }

  submit(values, dispatch) {
    const userData = { username: values.username, password: values.password, email: values.email };
    const loginRegExp = /^[a-z][a-z0-9_\-.]{3,25}$/i;
    const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!loginRegExp.test(userData.username)) {
      dispatch(alertActions.error('Your login should start with letter and contain only latin letters, numbers, _-.'));
      return;
    }

    if (!emailRegExp.test(userData.email)) {
      dispatch(alertActions.error('Your email is invalid'));
      return;
    }

    if (values.password !== values.rPassword) {
      dispatch(alertActions.error('Passwords are not equal'));
      return;
    }

    if (values.password.length < 8) {
      dispatch(alertActions.error('Password should be 8 characters length at least'));
      return;
    }

    dispatch(userActions.register(userData));
  }

  render() {
    const {
      handleSubmit, registering, alert, id,
    } = this.props;
    const message = alert.message && (alert.message.toString() === 'Bad Request' ?
      'Sorry, you can\'t use that login' : alert.message.toString());
    return (
      <Form className="ml-auto mr-auto" onSubmit={handleSubmit(this.submit)}>
        {alert.message && <Alert color="danger">{message}</Alert>}
        <Field
          id={`username${id}`}
          name="username"
          type="text"
          component={RenderField}
          label="Username"
          required="True"
        />
        <Field
          id={`email${id}`}
          name="email"
          type="email"
          component={RenderField}
          label="E-mail"
          required="True"
        />
        <Field
          id={`password${id}`}
          name="password"
          type="password"
          component={RenderField}
          label="Password"
          required="True"
        />
        <Field
          id={`rPassword${id}`}
          name="rPassword"
          type="password"
          component={RenderField}
          label="Password"
          required="True"
        />
        <Button color="primary" type="submit">Sign Up</Button>
        {registering &&
        <img alt="spinner" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10607/spinner3.gif" />}
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  registering: state.registration.registering,
  alert: state.alert,
});


const SignUp = connect(mapStateToProps)(reduxForm({ form: 'signUp' })(SignUpForm));

export default SignUp;
