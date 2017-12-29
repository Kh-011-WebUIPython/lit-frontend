import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Field, reduxForm, SubmissionError} from 'redux-form'

import {signUp} from "../actions";

const renderField = ({id, input, label, type, name}) => (
    <FormGroup>
        <Label for={id}>{label}</Label>
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
    // todo: form validation
    if (response.status >= 400) {
        throw new SubmissionError('Submit Failed');
    }
}

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            rPassword: '',
            isValid: {
                username: null,
                email: null,
                password: null,
            }
        };
    }

    validate = () => {
        this.setState({
            ...this.state,
            isValid: {
                username: this.isUsername(),
                email: this.isEmail(),
                password: this.isPassword(),
            }
        });
    };

    isUsername = () => /^[a-z][a-z0-9_\-.]{3,25}$/i.test(this.state.username);

    isEmail = () => /.*@.*/.test(this.state.email);

    isPassword = () => this.state.password.length >= 8 && this.state.password ===
        this.state.rPassword;

    render() {
        let {username, password, email} = this.state.isValid;
        const {handleSubmit} = this.props;
        return (
            <Form className="ml-auto mr-auto" onSubmit={handleSubmit(submit)}>
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
                <Button color="primary" type="submit">Sign In</Button>
            </Form>
        );
    }
}

export default reduxForm({form: 'signUp'})(SignUpForm);
