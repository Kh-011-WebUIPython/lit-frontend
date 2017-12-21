import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import {Link} from "react-router-dom";
import TagsInput from 'react-tagsinput';

class RepositorySettingsForm extends Component {

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
                    <Label>Repository description</Label>
                    <Input name="description" type="textarea"
                           onChange={this.handleInputChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>Add contributors for repositories</Label>
                    <EmailInput/>
                </FormGroup>
                <Link to='/user'><Button color="primary">Update</Button></Link>
                <Link to='/user'><Button className="ml-5" color="primary">Cancel</Button></Link>
            </Form>
        );
    }
}

class EmailInput extends Component {
    constructor() {
        super()
        this.state = {
            valid: true,
            tags: []
        }
    }

    handleChange = (tags) => {
        this.setState({...this.state.valid, tags});
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

    isValid = () => this.setState({...this.state, valid: false});

    render() {
        let EMAIL_VALIDATION_REGEX = /^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
        return <TagsInput
            value={this.state.tags}
            onChange={this.handleChange}
            inputProps={
                {
                    placeholder: "add contributors"
                }
            }
            addKeys={[9, 13, 32, 186,
                188]} // tab, enter, space, semicolon, comma
            onlyUnique
            addOnPaste
            validationRegex={EMAIL_VALIDATION_REGEX}
            onValidationReject={this.isValid}
            pasteSplit={data => {
                return data.replace(/[\r\n,;]/g, ' ').split(' ')
                    .map(d => d.trim())
            }}
            onChangeInput={this.handleChangeInput}
            className={`react-tagsinput ${!this.state.valid &&
            'border-danger'}`}

        />
    }
}

export default RepositorySettingsForm;