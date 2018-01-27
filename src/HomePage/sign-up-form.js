import React, { Component } from 'react';
import { Alert, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';

import { alertActions, userActions } from '../_actions';
import { connect } from 'react-redux';

const renderField = ({
  id, input, label, type, name,
}) => (
  <FormGroup>
    <Label for={id} className="py-2">{label}</Label>
    <Input name={name} type={type} id={id} {...input} required="True" />
  </FormGroup>
);

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    dispatch(alertActions.clear());
  }

  submit(values, dispatch) {
    const userData = { username: values.username, password: values.password, email: values.email };

    if (!/^[a-z][a-z0-9_\-.]{3,25}$/i.test(userData.username)) {
      dispatch(alertActions.error('Your login should start with letter and contain only latin letters, numbers, _-.'));
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
    const { handleSubmit, registering, alert } = this.props;
    const message = alert.message && (alert.message.toString() === 'Bad Request' ?
      'Sorry, you can\'t use that login' : alert.message.toString());
    return (
      <Form className="ml-auto mr-auto text-about" onSubmit={handleSubmit(this.submit)}>
        {alert.message && <Alert color="danger">{message}</Alert>}
        <Field
          id={`username${this.props.id}`}
          name="username"
          type="text"
          component={renderField}
          label="Username"
        />
        <Field
          id={`email${this.props.id}`}
          name="email"
          type="email"
          component={renderField}
          label="E-mail"
        />
        <Field
          id={`password${this.props.id}`}
          name="password"
          type="password"
          component={renderField}
          label="Password"
        />
        <Field
          id={`rPassword${this.props.id}`}
          name="rPassword"
          type="password"
          component={renderField}
          label="Password"
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
