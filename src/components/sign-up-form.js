import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

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

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

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

    isPassword = () => this.state.password.length >= 8 && this.state.password === this.state.rPassword;

    render() {
        let {username, password, email} = this.state.isValid;
        return (
            <Form className="ml-auto mr-auto">
                <FormGroup>
                    <Label>Username</Label>
                    <Input name="username" type="text" onChange={this.handleInputChange}
                           valid={username} required="True"/>
                </FormGroup>
                <FormGroup>
                    <Label>E-mail</Label>
                    <Input name="email" type="email" onChange={this.handleInputChange}
                           valid={email} required="True"/>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input name="password" type="password" onChange={this.handleInputChange}
                           valid={password} required="True"/>
                </FormGroup>
                <FormGroup>
                    <Label>Repeat password</Label>
                    <Input name="rPassword" type="password" onChange={this.handleInputChange}
                           valid={password} required="True"/>
                </FormGroup>
                <Button color="primary" onClick={this.validate}>Sign Up</Button>
            </Form>
        );
    }
}

export default SignUpForm;
