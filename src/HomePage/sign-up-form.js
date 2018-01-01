import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {Field, reduxForm, SubmissionError} from 'redux-form'

import {userActions} from '../_actions';

const renderField = ({id, input, label, type, name}) => (
    <FormGroup>
        <Label for={id}>{label}</Label>
        <Input name={name} type={type} id={id} {...input} required="True"/>
    </FormGroup>
)

class SignUpForm extends Component {
    constructor(props) {
        super(props);
    }

    submit(values, dispatch) {
        console.log(this);
        const userData = {username: values.username, password: values.password, email: values.email};
        dispatch(userActions.register(userData));
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <Form className="ml-auto mr-auto" onSubmit={handleSubmit(this.submit)}>
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
            </Form>
        );
    }
}

export default reduxForm({form: 'signUp'})(SignUpForm);
