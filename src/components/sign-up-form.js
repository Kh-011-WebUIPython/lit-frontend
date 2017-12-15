import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'login': '',
            'email': '',
            'password': '',
            'rPassword': '',
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

    // todo: rewrite with reactstrap
    render() {
        return (
            <Form className="w-50 ml-auto mr-auto p-5">
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input name="username" type="text" id="username" onChange={this.handleInputChange}
                           required="True"/>
                </FormGroup>
                <FormGroup>
                    <Label>E-mail</Label>
                    <Input name="e-mail" type="email" onChange={this.handleInputChange}
                           required="True"/>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input name="password" type="password" onChange={this.handleInputChange}
                           required="True"/>
                </FormGroup>
                <FormGroup>
                    <Label>Repeat password</Label>
                    <Input name="rPassword" type="password" onChange={this.handleInputChange}
                           required="True"/>
                </FormGroup>
                <Button color="primary">Sign Up</Button>
            </Form>
        );
    }
}

export default SignUpForm;
