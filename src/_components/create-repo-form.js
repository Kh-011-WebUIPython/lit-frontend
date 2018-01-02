import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import {Link} from 'react-router-dom';

// todo: rewrite with redux form

class CreateRepoForm extends Component {

    constructor() {
        super()
        this.state = {
            repoTitle: '',
            repoDescription: '',
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            ...this.state,
            [name]: value,
        });
    };

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label>Repository name</Label>
                    <Input name="repoTitle" type="text"
                           onChange={this.handleInputChange} required="True"/>
                </FormGroup>
                <FormGroup>
                    <Label>Repository description</Label>
                    <Input name="description" type="textarea"
                           onChange={this.handleInputChange}/>
                </FormGroup>
                <Link to='/empty_repository'><Button color="primary">Create</Button></Link>
                <Link to='/user'><Button className="ml-5" color="primary">Cancel</Button></Link>
            </Form>
        );
    }
}

export default CreateRepoForm;