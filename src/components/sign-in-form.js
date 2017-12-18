import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
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

    render() {
        return (
            <Form className="ml-auto mr-auto">
                <FormGroup>
                    <Label>Username</Label>
                    <Input name="username" type="text" id="username" onChange={this.handleInputChange}
                           required="True"/>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input name="password" type="password" onChange={this.handleInputChange}
                           required="True"/>
                </FormGroup>
                <Button color="primary">Sign In</Button>
            </Form>
        );
    }
}

export default SignInForm;
