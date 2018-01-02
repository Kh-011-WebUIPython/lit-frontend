import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import {Alert} from 'reactstrap';

import {alertActions, userActions} from '../_actions';

const renderField = ({id, input, label, type, name}) => (
    <FormGroup>
        <Label for={id}>{label}</Label>
        <Input name={name} type={type} id={id} {...input} required="True"/>
    </FormGroup>
)

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        const {dispatch} = this.props;
        dispatch(alertActions.clear());
    }

    submit(values, dispatch) {
        const userData = {username: values.username, password: values.password, email: values.email};
        if (values.password !== values.rPassword) {
            dispatch(alertActions.error('Passwords are not equal'));
        } else if (values.password.length < 8) {
            dispatch(alertActions.error('Password should be 8 characters length at least'))
        }
        else {
            dispatch(userActions.register(userData));
        }
    }

    render() {
        const {handleSubmit, registering, alert} = this.props;
        const message = alert.message && (alert.message.toString() === 'Bad Request' ?
            'Sorry, you can\'t use that login' : alert.message.toString());
        return (
            <Form className="ml-auto mr-auto" onSubmit={handleSubmit(this.submit)}>
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
                <img alt="spinner" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10607/spinner3.gif"/>}
            </Form>
        );
    }
}

export default reduxForm({form: 'signUp'})(SignUpForm);
