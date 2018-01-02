import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import {Field, reduxForm, SubmissionError} from 'redux-form'

import {userActions} from '../_actions';
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
    }

    submit(values, dispatch) {
        console.log(this);
        const userData = {username: values.username, password: values.password};
        dispatch(userActions.login(userData));
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <Form className="ml-auto mr-auto" onSubmit={handleSubmit(this.submit)}>
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

            </Form>
        );
    }
}

export default reduxForm({form: 'signIn'})(SignInForm);
