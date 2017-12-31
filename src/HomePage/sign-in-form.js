import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import {Field, reduxForm, SubmissionError} from 'redux-form'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {signIn} from "../actions/actions";

const renderField = ({id, input, label, type, name}) => (
    <FormGroup>
        <Label for={id} >{label}</Label>
        <Input name={name} type={type} id={id} {...input} required="True"/>
    </FormGroup>
)

async function submit(values) {
    const response = await fetch('https://jsonplaceholder.typicode.com/p123osts', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    });
    if (response.status >= 400) {
        throw new SubmissionError('Submit Failed');
    }
}

class SignInForm extends Component {

    render() {
        const {isAuthorized, handleSubmit} = this.props;
        return (
            <Form className="ml-auto mr-auto" onSubmit={handleSubmit(submit)}>
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
