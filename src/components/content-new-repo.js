import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import {Link} from "react-router-dom";
import TagsInput from 'react-tagsinput'

class ContentNewRepo extends Component {

    constructor() {
        super()
        this.state = {tags: []}
    }

    handleChange(tags) {
        this.setState({tags})

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

        var EMAIL_VALIDATION_REGEX = /^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i


        return (
            <div>
                <h2>Create a new repository</h2>
                <Form>
                    <FormGroup>
                        <Label>Repository name</Label>
                        <Input name="name"
                               type="text"
                               onChange={this.handleInputChange}
                               required="True"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Repository description</Label>
                        <Input name="description"
                               type="textarea"
                               onChange={this.handleInputChange}
                               required="True"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Add contributors for repositories</Label>
                        <TagsInput
                            name="contributors"
                            className="tag-email"
                            inputProps={
                                {
                                    className: "form-control react-tagsinput-input",
                                    placeholder: "add contributors"
                                }
                            }
                            value={this.state.tags}
                            addKeys={[9, 13, 32, 186,
                                188]} // tab, enter, space, semicolon, comma
                            onlyUnique
                            addOnPaste
                            validationRegex={EMAIL_VALIDATION_REGEX}
                            pasteSplit={data => {
                                return data.replace(/[\r\n,;]/g, ' ').split(' ')
                                    .map(d => d.trim())
                            }}
                            onChange={this.handleChange.bind(this)}/>
                    </FormGroup>
                    <Link to='/User'><Button color="primary">Create</Button></Link>
                </Form>
            </div>
        );
    }
}

export default ContentNewRepo;