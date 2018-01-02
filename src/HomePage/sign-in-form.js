import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import {Field, reduxForm, SubmissionError} from 'redux-form'
import {Alert} from 'reactstrap';

import {alertActions, userActions} from '../_actions';
import {store} from '../_helpers';

const renderField = ({id, input, label, type, name}) => (
    <FormGroup>
        <Label for={id}>{label}</Label>
        <Input name={name} type={type} id={id} {...input} required="True"/>
    </FormGroup>
)

class SignInForm extends Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        dispatch(alertActions.clear());
    }

    submit(values, dispatch) {
        console.log(this);
        const userData = {username: values.username, password: values.password};
        dispatch(userActions.login(userData));
    }

    render() {
        const {handleSubmit, loggingIn, alert} = this.props;
        const message = alert.message && (alert.message.toString() == 'Bad Request' ?
            'Sorry, login/password are incorrect' : alert.message.toString());
        return (
            <Form className="ml-auto mr-auto" onSubmit={handleSubmit(this.submit)}>
                {alert.message && <Alert color="danger">{message}</Alert>
                }
                <Field
                    id="username"
                    name="username"
                    type="text"
                    component={renderField}
                    label="Username"
                />
                <Field
                    id="password"
                    name="password"
                    type="password"
                    component={renderField}
                    label="Password"
                />
                <Button color="primary" type="submit">Sign In</Button>
                {loggingIn && <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10607/spinner3.gif"/>}
            </Form>
        );
    }
}

export default reduxForm({form: 'signIn'})(SignInForm);
